const { Schema, model, Types } = require("mongoose");

const scheduleSchema = new Schema({
  dentist: { type: Types.ObjectId, ref: 'Dentist', required: true },
  patient: { type: Types.ObjectId, ref: 'Patient' },
  weekDay: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;
