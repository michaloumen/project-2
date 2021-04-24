const {
  isUserExists,
  isPasswordRigth,
} = require("../validations/auth.validations");
const passwordManager = require("../utils/passwordManager");
const isAuthDentist = require("../utils/isAuthDentist.utils");

const UserService = require('../service/user.service');

class AuthController {
  static async _buildNewUser(req, res, isDentist) {
    const { userEmail: email, password, userName: name } = req.body;

    const encryptPassword = await passwordManager.encryptPassword(password);
    let newUser = { name, email, password: encryptPassword };

    if (!!(await isUserExists(email, isDentist))) {
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
    try {
      const isDentist = !!req.body.dentist;

      const newUser = await AuthController._buildNewUser(req, res, isDentist);

      if (!newUser) {
        return res.render("auth-views/signup", {
          errorMessage: "Email já existe. Por favor, escolha outro",
        });
      }

      await UserService.createNewUser(newUser, isDentist);

      return isDentist ? res.redirect("/login/dentist") : res.redirect("/login/patient");
    } catch (error) {
      console.log('error em postCreateNewUser : ', error)
      return res.render('error')
    }
  }

  static async postLoginUser(req, res) {
    const { userType } = req.params;
    const isDentist = userType === 'dentist';
    console.log('isDentist', isDentist)
    try {
      const { userEmail: email, userPassword } = req.body;

      if (!!(await isUserExists(email, isDentist))) {
        return res.render("auth-views/login", {
          errorMessage: "Nome de usuário ou senha incorretos",
        });
      }

      const userFromDB = await UserService.searchUserByEmail(email, isDentist);
      if (!isPasswordRigth(userPassword, userFromDB.password)) {
        return isDentist ?
          res.render("auth-views/login-dentist", {
            errorMessage: "Nome de usuário ou senha incorretos",
          })
          :
          res.render("auth-views/login", {
            errorMessage: "Nome de usuário ou senha incorretos",
          })
      }
      req.session.currentUser = userFromDB;

      return isDentist ? res.redirect("/dentist") : res.redirect("/patient");
    } catch (error) {
      console.log('error em postLoginUser: ', error);

      return res.render('error');
    }
  }

  static async authDentistRouteSignUp(req, res, next) {
    const { passwordSite } = req.body;
    try {
      const isAuth = await isAuthDentist(passwordSite);
      if (isAuth) {
        return res.render('auth-views/signup', { user: { role: 'dentist' } })
      }

      return res.redirect(`/signup/${dentist}`);
    } catch (erro) {
      return res.render("auth-views/dentistAuth", {
        error: "Senha de acesso incorreta",
      });
    }
  }
}

module.exports = AuthController;
