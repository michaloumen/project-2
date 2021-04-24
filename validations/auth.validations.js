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
};
