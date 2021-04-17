const isAuthDentist = (passwordSite) => {
  if (passwordSite === process.env.DENTIST_SINGUP) {
    return true;
  }

  return false;
};

module.exports = isAuthDentist;
