const bcrypt = require("bcryptjs");

const saltRounds = 10;

const encryptPassword = async (userPassword) => {
  const salts = await bcrypt.genSalt(saltRounds);

  const encryptedPassword = bcrypt.hashSync(userPassword, salts);

  return encryptedPassword;
};

const verifyPassword = (userPassword, passwordFromDB) => {
  return bcrypt.compareSync(userPassword, passwordFromDB);
};

module.exports = {
  encryptPassword,
  verifyPassword,
};
