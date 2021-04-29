const userSessionValidationMiddleware = (req, res, next) => {
  if (req.session.currentUser) return next();

<<<<<<< HEAD
  res.redirect("/login");
=======
  res.redirect("/login/dentist");
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
};

module.exports = userSessionValidationMiddleware;
