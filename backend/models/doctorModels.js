const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  telefono: { type: String },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
