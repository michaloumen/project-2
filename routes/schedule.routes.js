
const router = require("express").Router();
const ScheduleController = require("../controllers/schedule.controller");

router.get("/", ScheduleController.renderSchedule);
router.post("/", ScheduleController.createNewAppointment);


module.exports = router;
