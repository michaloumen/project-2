const {
  isUserExists,
  isPasswordRight,
} = require("../validations/auth.validations");
const passwordManager = require("../utils/passwordManager");
const isAuthDentist = require("../middlewares/verifyAuthDentist.middlewar");

const { Patient, Dentist } = require("../models/Users.model");

class AuthController {
  static async _buildNewUser(req, res, isDentist) {
    /* const isDentist = !!req.user.role; */
    const { userEmail: email, password, userName: name } = req.body;
    console.log(req.body);

    const encryptPassword = await passwordManager.encryptPassword(password);
    let newUser = { name, email, password: encryptPassword };
    console.log(newUser);

    if (await isUserExists(email)) {
      res.render("auth-views/signup", {
        errorMessage: "Email já existe. Por favor, escolha outro",
      });
      return null;
    }

    return isDentist
      ? {
          ...newUser,
          cro: req.body.cro,
          specialty: req.body.specialty ? req.body.specialty : "",
          role: "dentist",
        }
      : newUser;
  }

  static async postCreateNewUser(req, res, next) {
    console.log(req.user);
    try {
      const newUser = await AuthController._buildNewUser(req, res, false);
      if (!newUser) {
        return;
      }
      console.log(newUser);
      /* const isDentist = !!req.user.role; */

      /* isDentist ? await Dentist.create(newUser) : await Patient.create(newUser); */
      await Patient.create(newUser);

      return res.redirect("/login");
    } catch (error) {
      return next(error);
    }
  }

  static async postLoginUser(req, res) {
    try {
      /* const isDentist = !!req.user.role; */
      const { userEmail, userPassword } = req.body;

      if (!(await isUserExists(userEmail)))
        return res.render("auth-views/login", {
          errorMessage: "Nome de usuário ou senha incorretos",
        });

      const userFromDB = isDentist
        ? await Dentist.findOne({ email })
        : await Patient.findOne({ email });

      if (!(await isPasswordRight(userPassword, userFromDB.password)))
        return res.render("auth-views/login", {
          errorMessage: "Nome de usuário ou senha incorretos",
        });

      req.session.currentUser = userFromDB;

      return isDentist ? res.redirect("/dentist") : res.redirect("/patient");
    } catch (error) {
      return "next(error)";
    }
  }

  static async authDentistRouteSignUp(req, res, next) {
    const { passwordSite } = req.body;
    const isAuth = await isAuthDentist(passwordSite);
    if (isAuth) {
      req = {
        ...req,
        user: {
          role: "dentist",
        },
      };

      return res.redirect("/dentist/signup");
   //mesma view que o paciente se cadastra. Precisa ter rota separada
  }
  console.log(res.body)

    return res.render("auth-views/dentistAuth", {
      error: "Senha de acesso incorreta",
    });
  }
}

module.exports = AuthController;
