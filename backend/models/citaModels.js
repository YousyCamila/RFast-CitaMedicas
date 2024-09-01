const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitaSchema = new Schema({
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  paciente: { type: Schema.Types.ObjectId, ref: 'Paciente', required: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  motivo: { type: String, required: true },
  estado: { type: String, enum: ['Pendiente', 'Confirmada', 'Cancelada'], default: 'Pendiente' }
});

module.exports = mongoose.model('Cita', CitaSchema);
