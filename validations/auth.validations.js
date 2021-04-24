const bcrypt = require("bcryptjs");
const UserService = require('../service/user.service');

module.exports = {
  isUserExists: async (email, isDentist) => {
    const response = await UserService.searchUserByEmail(email, isDentist);

    return !!response;
  },
  isPasswordRigth: (userPassword, passwordFromDB) => {
    return bcrypt.compareSync(userPassword, passwordFromDB);
  },
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
};
