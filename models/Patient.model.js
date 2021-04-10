// User model here
const { Schema, model, Types } = require("mongoose");

const patientSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    password: { type: String, required: true },
    birthDate: { type: Date },
    adress: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    dentist: { type: [Types.ObjectId], ref: "Dentist" },
    returnDate: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Patient = model("Patient", patientSchema);

module.exports = Patient;
