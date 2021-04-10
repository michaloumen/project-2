const isAuthDentist = (req, res, next) => {
  console.log('michlle');

  const { passwordSite } = req;

  console.log('passwordSite', passwordSite)
  console.log('process.env.DENTIST_SINGUP', process.env.DENTIST_SINGUP)


  if (passwordSite === process.env.DENTIST_SINGUP) {
    req.DENTIST_SINGUP = true;

    return next();
  }

  console.log('não deu certo')
  return res.render('error');
};

module.exports = isAuthDentist;