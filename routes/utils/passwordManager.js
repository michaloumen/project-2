const bcrypt = require("bcryptjs");

const saltRounds = 10;

module.exports.encryptPassword = async function (password) {
  const salts = await bcrypt.genSalt(saltRounds);

  const encryptedPassword = bcrypt.hashSync(password, salts);

  return encryptedPassword;
};

module.exports.verifyPassword = function (password, encryptedPassword) {
  return bcrypt.compareSync(password, encryptedPassword);
};
