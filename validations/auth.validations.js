const bcrypt = require("bcryptjs");
<<<<<<< HEAD
const { Patient, Dentist } = require('../models/Users.model');


module.exports = {
  isUserExists: async (email, isDentist) => {
    const response = isDentist ? await Dentist.findOne({ email }) : await Patient.findOne({ email });
=======
const UserService = require('../service/user.service');

module.exports = {
  isUserExists: async (email, isDentist) => {
    const response = await UserService.searchUserByEmail(email, isDentist);

>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
    return !!response;
  },
  isPasswordRigth: (userPassword, passwordFromDB) => {
    return bcrypt.compareSync(userPassword, passwordFromDB);
  },
<<<<<<< HEAD
=======
  emailValidation: (email) => {
    const errors = [];
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      errors.push('Formato inválido');
      return errors;
    }

    return errors;
  },
  phoneValidation: (phone) => {
    const errors = [];
    const phoneRegex = /^(\(11\) (9\d{4})-\d{4})|((\(1[2-9]{1}\)|\([2-9]{1}\d{1}\)) [5-9]\d{3}-\d{4})$/;

    if (!phoneRegex.test(phone)) {
      errors.push('Formato inválido');
      return errors;
    }

    return errors;
  }
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
};
