const express = require("express");
const router = express.Router();

const DentistController = require('../controllers/dentist.controller');

router.get("/", DentistController.searchAllAppointment);
router.post("/delete/:id", DentistController.deletesScheduleById);
router.get("/profile", (req, res) => res.render("dentist/profile"));

module.exports = router;
