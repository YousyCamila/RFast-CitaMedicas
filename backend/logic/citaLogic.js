const Cita = require('../models/citaModels');

// Función para crear una nueva cita
async function crearCita(body) {
    const citaExistente = await Cita.findOne({ fecha: body.fecha, hora: body.hora, paciente: body.paciente, doctor: body.doctor });

    if (citaExistente) {
        throw new Error('Ya existe una cita en esta fecha y hora para el paciente y doctor especificados.');
    }

    const cita = new Cita(body);
    return await cita.save();
}

// Función para obtener todas las citas
async function obtenerCitas() {
    return await Cita.find().populate('paciente doctor');
}

// Función para obtener una cita por ID
async function obtenerCitaPorId(id) {
    const cita = await Cita.findById(id).populate('paciente doctor');

    if (!cita) {
        throw new Error('Cita no encontrada');
    }
    return cita;
}

// Función para actualizar una cita por ID
async function actualizarCita(id, body) {
    const cita = await Cita.findByIdAndUpdate(id, body, { new: true }).populate('paciente doctor');

    if (!cita) {
        throw new Error('Cita no encontrada');
    }
    return cita;
}

// Función para eliminar una cita por ID
async function eliminarCita(id) {
    const cita = await Cita.findByIdAndDelete(id);

    if (!cita) {
        throw new Error('Cita no encontrada');
    }
    return { message: 'Cita eliminada' };
}

module.exports = {
    crearCita,
    obtenerCitas,
    obtenerCitaPorId,
    actualizarCita,
    eliminarCita,
};
