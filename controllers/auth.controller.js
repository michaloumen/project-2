const { isUserExists, isPasswordRigth } = require('../validations/auth.validations');
const passwordManager = require('../utils/passwordManager');
const isAuthDentist = require("../middlewares/verifyAuthDentist.middlewar");

const { Patient, Dentist } = require('../models/Users.model');

class AuthController {
  static async _buildNewUser(req) {
    const isDentist = !!req.user.role;
    const { userEmail: email, password, userName: name } = req.body;

    const ecryptPassword = await passwordManager.encryptPassword(password);
    let newUser = { name, email, ecryptPassword };

    if (isUserExists(email)) return res.render("auth-views/signup", { errorMessage: "Nome de usuário já existe. Por favor, escolha outro" });

    return isDentist ? { ...newUser, cro: req.body.cro, specialty: req.body.specialty ? req.body.specialty : '', role: req.user.role } : newUser;
  }

  static async postCreateNewUser(req, res) {
    try {
      const newUser = await this._buildNewUser(req);

      const isDentist = !!req.user.role;

      isDentist ? await Dentist.create(newUser) : await Patient.create(newUser);

      return res.redirect('/login');
    } catch (error) {
      return next(error);
    }
  }

  static async postLoginUser(req, res) {
    try {
      const isDentist = !!req.user.role;
      const { userEmail, userPassword } = req.body;

      if (!isUserExists(userEmail)) return res.render("auth-views/login", { errorMessage: 'Nome de usuário ou senha incorretos' });

      const userFromDB = isDentist ? await Dentist.findOne({ email }) : await Patient.findOne({ email });

      if (!isPasswordRigth(userPassword, userFromDB.password)) return res.render("auth-views/login", { errorMessage: 'Nome de usuário ou senha incorretos' });

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
          role: 'dentist',
        }
      };

      return res.render("auth-views/signup")
    }

    return res.render("auth-views/dentistAuth", {
      error: "Senha de acesso incorreta",
    });
  }
}

module.exports = AuthController;