const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PacienteSchema = new Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  telefono: { type: String },
  email: { type: String, required: true, unique: true },
  direccion: { type: String, required: true } // Asegúrate de que sea requerido aquí
});


module.exports = mongoose.model('Paciente', PacienteSchema);
