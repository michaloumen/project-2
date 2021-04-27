const express = require("express");
const router = express.Router();

/* GET home page */
<<<<<<< HEAD
router.get("/", (req, res, next) => res.render("index"));
=======
router.get("/", (req, res, next) => res.render("index", { loggedUser: req.session.currentUser }));
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4

module.exports = router;
