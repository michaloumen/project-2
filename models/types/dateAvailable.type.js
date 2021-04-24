const { WORK_TIME } = require('../../utils/constants.util');

module.exports = {
  day: { type: Date },
  timeAvailable: { type: [String], enum: WORK_TIME },
};