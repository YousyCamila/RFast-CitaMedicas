const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitaSchema = new Schema({
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  paciente: { type: String, required: true }, // Cambiado de ObjectId a String
  doctor: { type: String, required: true },   // Cambiado de ObjectId a String
  motivo: { type: String, required: true },
  estado: { type: String, enum: ['Pendiente', 'Confirmada', 'Cancelada'], default: 'Pendiente' }
});

module.exports = mongoose.model('Cita', CitaSchema);
