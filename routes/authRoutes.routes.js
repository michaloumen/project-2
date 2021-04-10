const express = require("express");
const User = require("../models/Patient.model");
const passwordManager = require("../utils/passwordManager");
const validateParams = require("../middlewares/authParamsValidation");

const router = express.Router();

router.get("/signup", (req, res) => res.render("auth-views/signup"));

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.render("auth-views/signup", {
        errorMessage: "Nome de usuário já existe. Por favor, escolha outro",
      });
      return;
    }

    const newUser = new User({
      username,
      password: await passwordManager.encryptPassword(password),
    });

    console.log(newUser);

    await newUser.save();

    res.redirect("/login");
  } catch (error) {
    return next(error);
  }
});

router.get("/login", (req, res) => res.render("auth-views/login"));

router.post("/login", validateParams, async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (
      !existingUser ||
      !passwordManager.verifyPassword(password, existingUser.password)
    ) {
      res.render("auth-views/login", {
        errorMessage: "Nome de usuário ou senha incorretos",
      });
      return;
    }

    req.session.currentUser = existingUser;

    res.redirect("/main");
  } catch (error) {
    return "next(error)";
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

router.get("/about", (req, res) => res.render("about"));
router.get("/treatments", (req, res) => res.render("treatments"));
router.get("/contact", (req, res) => res.render("contact"));

module.exports = router;
