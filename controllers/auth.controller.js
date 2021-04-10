const { isUserExists, isPasswordRigth } = require('../validations/auth.validations');
const passwordManager = require('../utils/passwordManager');
const { Patient } = require('../models/Users.model');

class AuthPatientController {

  static async postCreateNewUser(req, res) {
    try {
      const { userEmail, userPassword } = req.body;

      if (isUserExists(userEmail)) return res.render("auth-views/signup", { errorMessage: "Nome de usuário já existe. Por favor, escolha outro" });

      const newUser = {
        email: userEmail,
        password: await passwordManager.encryptPassword(userPassword)
      }

      await Patient.create(newUser);

      res.redirect('/login');
    } catch (error) {
      return next(error);
    }
  }

  static async postLoginPatient(req, res) {
    try {
      const { userEmail, userPassword } = req.body;

      if (!isUserExists(userEmail)) return res.render("auth-views/login", { errorMessage: 'Nome de usuário ou senha incorretos' });

      const patientFromDB = await Patient.findOne({ email });

      if (!isPasswordRigth(userPassword, userFromDB.password)) return res.render("auth-views/login", { errorMessage: 'Nome de usuário ou senha incorretos' });

      req.session.currentUser = patientFromDB;

      res.redirect("/main");
    } catch (error) {
      return "next(error)";
    }
  }
}

module.exports = AuthPatientController;