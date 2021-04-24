const express = require("express");
const router = express.Router();
const UserSevrice = require('../service/user.service');

/* GET home page */
router.get("/", async (req, res) => {

  // const response = await UserSevrice.searchAllUsers(true);

  // console.log(response);

  res.render("dentist/home", { loggedUser: req.session.currentUser })
});
router.get("/profile", (req, res) => res.render("dentist/profile"));

module.exports = router;
