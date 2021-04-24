const { WEEK_DAYS_NUMBERS } = require('../utils/constants.util');

const UserService = require('../service/user.service');
const ScheduleService = require('../service/schedule.service');
class DentistController {
  static async searchAllAppointment(req, res) {
    try {
      const userId = req.session.currentUser._id;

      const allAppointments = await ScheduleService.searchScheduleByUser(userId, true);

      const appoitmentsArray = allAppointments.map(async appointment => {
        const patient = await UserService.searchUserById(appointment.patient);
        console.log(appointment)
        return {
          id: appointment._id,
          weekDay: WEEK_DAYS_NUMBERS[`${appointment.weekDay}`],
          patient: { name: patient.name, id: patient._id },
          date: appointment.date,
          time: appointment.time,
        };

      });

      const appointmentsResults = await Promise.all(appoitmentsArray);
      res.render("dentist/home", { loggedUser: req.session.currentUser, appointments: appointmentsResults })
    } catch (error) {
      console.log('error in DentistController.searchAllAppointment : ', error)
    }
  }
}

module.exports = DentistController;