const Schedule = require("../models/Schedule.model");

class ScheduleService {
  async searchScheduleByUser(userId, isDentist) {
    try {
      const data = isDentist ? { dentist: userId } : { patient: userId }
      const response = await Schedule.find({ ...data })

      return response;
    } catch (error) {
      console.log('Erro in ScheduleService.searchScheduleByUser: ', error)
    }
  }
}

module.exports = new ScheduleService();