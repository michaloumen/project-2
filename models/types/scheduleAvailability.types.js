const { WEEK_DAYS, WORK_TIME } = require('../../utils/constants.util');

module.exports = {
  weekDay: { type: [Number], enum: WEEK_DAYS },
  start: { type: String, enum: WORK_TIME },
  end: { type: String, enum: WORK_TIME },
  launchTimeStart: { type: String, enum: WORK_TIME },
  launchTimeEnd: { type: String, enum: WORK_TIME },
};

