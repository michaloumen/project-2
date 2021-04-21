const { Schema, model, Types } = require("mongoose");

const scheduleSchema = new Schema({
  dentist: { type: Types.ObjectId, ref: 'Dentist' },
  patient: { type: Types.ObjectId, ref: 'Patient' },
  date: { type: Date },
  type: { type: String }
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;
