const bcrypt = require("bcryptjs");

const saltRounds = 10;

const encryptPassword = async (password) => {
  const salts = await bcrypt.genSalt(saltRounds);

  const encryptedPassword = bcrypt.hashSync(password, salts);

  return encryptedPassword;
};

const verifyPassword = (textPassword, encryptedPassword) => {
  return bcrypt.compareSync(textPassword, encryptedPassword);
};

module.exports = {
  encryptPassword,
  verifyPassword,
};
