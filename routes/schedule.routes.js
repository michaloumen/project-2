
const router = require("express").Router();
<<<<<<< HEAD
const AuthController = require("../controllers/auth.controller");

router.get("/", (req, res) => res.render("datePicker"));
=======
const ScheduleController = require("../controllers/schedule.controller");

router.get("/", ScheduleController.renderSchedule);
router.post("/", ScheduleController.createNewAppointment);
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4


module.exports = router;
