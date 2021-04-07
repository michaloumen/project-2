const express = require("express");
const User = require("../models/User.model");
const passwordManager = require("../utils/passwordManager");

const router = express.Router();

const validateSignupParams = (req, res, next) => {
  const { username, password } = req.body;
  const isEmpty = !username || !password;

  if (isEmpty) {
    res.render("auth-views/signup", {
      usernameError: !username && "Nome de usuário obrigatório",
      passwordError: !password && "Senha obrigatória",
    });
    return;
  }

  const usernameNotMin = username.length < 5;
  const passwordNotMin = password.length < 6;
  const notMin = usernameNotMin || passwordNotMin;

  if (notMin) {
    res.render("auth-views/signup", {
      usernameError: usernameNotMin && "Mínimo de 5 caracteres",
      passwordError: passwordNotMin && "Mínimo de 6 caracteres",
    });
    return;
  }

  const usernameMax = username.length > 30;
  const passwordMax = password.length > 30;
  const max = usernameMax || passwordMax;

  if (max) {
    res.render("auth-views/signup", {
      usernameError: usernameMax && "Máximo de 30 caracteres",
      passwordError: passwordMax && "Máximo de 30 caracteres",
    });

    return;
  }

  next();
};

router.get("/signup", (req, res) => res.render("auth-views/signup"));

router.post("/signup", validateSignupParams, async (req, res, next) => {
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

router.post("/login", async (req, res, next) => {
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
    return next(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
