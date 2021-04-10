const bcrypt = require("bcryptjs");

module.exports = {
  isUserExists: async (email) => {
    const response = await User.findOne({ email });

    return !!response;
  },
  isPasswordPatientRigth: (userPassword, passwordFromDB) => {
    return !!bcrypt.compareSync(userPassword, passwordFromDB);
  },
};