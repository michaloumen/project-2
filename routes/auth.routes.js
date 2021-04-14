const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");

router.get("/signup", (req, res) => res.render("auth-views/signup"));
router.post("/signup", AuthController.postCreateNewUser);

router.get("/dentist/signup", (req, res) =>
  res.render("auth-views/dentistAuth")
);
router.post("/dentist/signup", AuthController.authDentistRouteSignUp);

router.get("/login", (req, res) => res.render("auth-views/login"));
router.post("/login", AuthController.postLoginUser);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;