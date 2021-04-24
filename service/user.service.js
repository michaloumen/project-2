const { Dentist, Patient } = require("../models/Users.model");

class UserService {
  async searchAllUsers(isDentist) {
    try {
      const response = isDentist ?
        await Dentist.find()
        :
        await Patient.find();

      return response;
    } catch (error) {
      console.log('Error in method UserService.searchAllUsers: ', error);
    }
  }

  async searchUserById(id, isDentist) {
    try {
      const response = isDentist ?
        await Dentist.findById(id)
        :
        await Patient.findById(id);

      return response;
    } catch (error) {
      console.log('Error in method UserService.searchUsertById: ', error);
    }
  }

  async searchUserByEmail(email, isDentist) {
    try {
      const response = isDentist ?
        await Dentist.findOne({ email })
        :
        await Patient.findOne({ email });
      return response;
    } catch (error) {
      console.log('Error in method UserService.searchUserByEmail: ', error);
    }
  }

  async createNewUser(body, isDentist) {
    try {
      const response = isDentist ?
        await Dentist.create(body)
        :
        await Patient.create(body);

      return response;
    } catch (error) {
      console.log('Error in method UserService.createNewUser: ', error);
    }
  }

  async updateDateAvailable(id, body) {
    try {
      const response = await Dentist.findByIdAndUpdate(id, { dateAvailable: body })

      return response;
    } catch (error) {
      console.log('Error in method UserService.editUser: ', error);
    }
  }
}

module.exports = new UserService();