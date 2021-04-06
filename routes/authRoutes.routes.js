const express = require("express");
const User = require("../models/User.model");
const { encryptPassword, verifyPassword } = require("../utils/passwordManager");
console.log(verifyPassword);

const router = express.Router();

router.get("/signup", (req, res) => res.render("auth-views/signup"));

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.render("auth-views/signup", {
        errorMessage: "Nome de suário já existe. Por favor, escolha outro",
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

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      res.render("auth-views/login", {
        errorMessage: "Nome de usuário ou senha incorretos",
      });
      return;
    }
    console.log(
      passwordManager.verifyPassword(password, existingUser.password)
    );
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
