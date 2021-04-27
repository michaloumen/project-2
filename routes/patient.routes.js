const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("patient/home", { loggedUser: req.session.currentUser }));

module.exports = router;