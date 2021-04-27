const extendSchema = require('mongoose-extend-schema');
const { Schema, model, Types } = require("mongoose");

<<<<<<< HEAD
=======
const scheduleAvailability = require('./types/scheduleAvailability.types');
const dateAvailable = require('./types/dateAvailable.type');
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4

const UserSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
<<<<<<< HEAD
    password: { type: String, required: true },
=======
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
    birthDate: { type: Date },
    adress: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['patient', 'dentist'], default: 'patient' },
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD

const patientSchema = extendSchema(UserSchema, {
=======
const patientSchema = extendSchema(UserSchema, {
  password: { type: String },
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
  dentist: { type: [Types.ObjectId], ref: 'Dentist' },
  returnDate: { type: Date },
});

const destistSchema = extendSchema(UserSchema, {
<<<<<<< HEAD
  cro: { type: Number, required: true },
  specialty: { type: [String] },
=======
  password: { type: String, required: true },
  cro: { type: Number },
  specialty: { type: [String] },
  scheduleAvailability: { type: [Object], scheduleAvailability },
  dateAvailable: { type: [Object], dateAvailable },
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
});

const Dentist = model('Dentist', destistSchema);
const Patient = model('Patient', patientSchema);

<<<<<<< HEAD
module.exports = { Patient, Dentist }
=======
module.exports = { Patient, Dentist };
>>>>>>> 23070ed8dcc4d8da833ce2556dc0f8342751b1d4
