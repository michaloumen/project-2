const bcrypt = require("bcryptjs");
const { Patient, Dentist } = require('../models/Users.model');


module.exports = {
  isUserExists: async (email, isDentist) => {
    const response = isDentist ? await Dentist.findOne({ email }) : await Patient.findOne({ email });
    return !!response;
  },
  isPasswordRigth: (userPassword, passwordFromDB) => {
    return bcrypt.compareSync(userPassword, passwordFromDB);
  },
};
