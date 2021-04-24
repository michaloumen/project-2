const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => res.render("patient/home", { loggedUser: req.session.currentUser }));
