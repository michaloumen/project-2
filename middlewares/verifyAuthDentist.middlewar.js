const isAuthDentist = (passwordSite) => {
  console.log("michlle");

  console.log("passwordSite", passwordSite);
  console.log("process.env.DENTIST_SINGUP", process.env.DENTIST_SINGUP);

  if (passwordSite === process.env.DENTIST_SINGUP) {
    return true;
  }

  console.log("não deu certo");
  return false;
};

module.exports = isAuthDentist;
