const moment = require('moment');

const { WORK_TIME } = require('../utils/constants.util');
const { transformDateToDateFormatAndWeekDay } = require('../utils/transformDate.util');
const { emailValidation, phoneValidation, isUserExists } = require('../validations/auth.validations');

const UserService = require('../service/user.service');
const ScheduleModel = require('../models/Schedule.model');

class ScheduleController {
  static async renderSchedule(req, res) {
    try {
      const dentist = await UserService.searchAllUsers(true);

      res.render('schedule', { dentist, isUserLogged: !req.session.currentUser, loggedUser: req.session.currentUser })
    } catch (error) {
      console.log('error in ScheduleController.renderSchedule : ', error)
    }
  }

  static async createNewAppointment(req, res) {
    const { dateSchedule, timeSchedule, dentist } = req.body;
    const { weekDay, year, monthShort, day } = transformDateToDateFormatAndWeekDay(dateSchedule);

    let newAppointment = {
      dentist,
      weekDay,
      patient: req.session.currentUser,
      date: new Date(year, monthShort, day),
      time: timeSchedule,
    }

    if (!req.session.currentUser) {
      const { userName, userEmail, userPhone } = req.body;

      if (emailValidation(userEmail) > 0) return res.render('schedule', { userEmailError: emailValidation(userEmail) });
      if (phoneValidation(userPhone) > 0) return res.render('schedule', { userPhoneError: phoneValidation(userEmail) });

      const body = {
        name: userName,
        email: userEmail,
        phone: userPhone,
      }
      const userExist = await isUserExists(userEmail, false);
      const patient = userExist ? await UserService.searchUserByEmail(userEmail, false) : await UserService.createNewUser(body, false);

      newAppointment = {
        ...newAppointment,
        patient: patient._id
      }
    }

    try {
      const response = await ScheduleModel.create(newAppointment);

      const timeAvailable = WORK_TIME.filter(time => time !== response.time);
      const dateAvailable = {
        day: response.date,
        timeAvailable: [...timeAvailable]
      };

      await UserService.updateDateAvailable(response.dentist, dateAvailable);

      const textSuccess = `Consulta marcada para ${dateSchedule} às ${timeSchedule}`
      const dentist = await UserService.searchAllUsers(true);

      res.render('schedule', { textSuccess, isUserLogged: !req.session.currentUser, loggedUser: req.session.currentUser, dentist })
    } catch (error) {
      console.log('error in ScheduleController.createNewAppointment : ', error)
    }
  }
}

module.exports = ScheduleController;