const { TIME, WEEKDAYS } = require('../../utils/contants.util');

module.exports = {
  weekDay: { type: [Number], enum: WEEKDAYS },
  start: { type: String, enum: TIME },
  end: { type: String, enum: TIME },
  timeAvailable: { type: [String], enum: TIME },
};

