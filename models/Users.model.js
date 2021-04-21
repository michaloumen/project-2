const extendSchema = require('mongoose-extend-schema');
const { Schema, model, Types } = require("mongoose");

const scheduleAvailability = require('./types/scheduleAvailability.types');

const UserSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    password: { type: String, required: true },
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

const patientSchema = extendSchema(UserSchema, {
  dentist: { type: [Types.ObjectId], ref: 'Dentist' },
  returnDate: { type: Date },
});

const destistSchema = extendSchema(UserSchema, {
  cro: { type: Number, required: true },
  specialty: { type: [String] },
  scheduleAvailability: { type: [Object], scheduleAvailability },
});

const Dentist = model('Dentist', destistSchema);
const Patient = model('Patient', patientSchema);

module.exports = { Patient, Dentist };