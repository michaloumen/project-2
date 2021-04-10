const express = require("express");
const userSessionValidationMiddleware = require("../middlewares/userSessionValidation.middleware");

const router = express.Router();

router.use(userSessionValidationMiddleware);

router.get("/main", (req, res, next) => {
  console.log(req.session.currentUser);
  res.render("protected-views/main", { loggedUser: req.session.currentUser });
});

router.get("/private", (req, res, next) => {
  res.render("protected-views/private", {
    loggedUser: req.session.currentUser,
  });
});

//tem essa rota main e private como rotas protegidas mas ainda não está aparecendo no navbar

module.exports = router;
