const router = require("express").Router();

const isAuthDentist = require("../middlewares/verifyAuthDentist.middlewar");
const AuthPatientController = require("../controllers/auth.controller");

router.get("/signup", (req, res) => res.render("auth-views/signup"));

router.get("/dentist/signup", (req, res) =>
  res.render("auth-views/dentistAuth")
);
router.post("/dentist/signup", async (req, res, next) => {
  const { passwordSite } = req.body;
  const isAuth = await isAuthDentist(passwordSite);
  if (isAuth) {
    return res.render("auth-views/signup");
  }
  return res.render("auth-views/dentistAuth", {
    error: "Senha de acesso incorreta",
  });
});

router.post(
  "/signup",
  async () => await AuthPatientController.postCreateNewUser
);

router.get("/login", (req, res) => res.render("auth-views/login"));
router.post("/login", async () => await AuthPatientController.postLoginPatient);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
