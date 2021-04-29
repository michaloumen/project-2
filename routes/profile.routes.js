const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/dentist", (req, res, next) => res.render("dentist/profile"));

module.exports = router;
