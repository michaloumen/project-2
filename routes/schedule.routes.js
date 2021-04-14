
const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");

router.get("/", (req, res) => res.render("datePicker"));


module.exports = router;
