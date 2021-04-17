const bcrypt = require("bcryptjs");
const { Patient, Dentist } = require("../models/Users.model");

module.exports = {
  isUserExists: async (email) => {
    const response = await Patient.findOne({ email });
    console.log(response);
    return !!response;
  },
  isPasswordPatientRigth: (userPassword, passwordFromDB) => {
    return !!bcrypt.compareSync(userPassword, passwordFromDB);
  },
};
