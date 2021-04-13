const router = require("express").Router();
const AuthPatientController = require("../controllers/auth.controller");

router.get("/signup", (req, res) => res.render("auth-views/signup"));
router.post("/signup", async () => await AuthPatientController.postCreateNewUser);

router.get("/dentist/signup", (req, res) => res.render("auth-views/dentistAuth"));
router.post("/dentist/signup", async () => await AuthPatientController.authDentistRouteSignUp);


router.get("/login", (req, res) => res.render("auth-views/login"));
router.post("/login", async () => await AuthPatientController.postLoginUser);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
