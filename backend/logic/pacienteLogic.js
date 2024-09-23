const Paciente = require('../models/pacienteModels');

// Crear un nuevo paciente
async function crearPaciente(body) {
    const pacienteExistente = await Paciente.findOne({ email: body.email });

    if (pacienteExistente) {
        throw new Error('El paciente ya existe con ese email.');
    }

    const paciente = new Paciente(body);
    return await paciente.save();
}

// Obtener todos los pacientes
async function obtenerPacientes() {
    return await Paciente.find();
}

// Obtener un paciente por email
async function obtenerPacientePorEmail(email) {
    const paciente = await Paciente.findOne({ email });

    if (!paciente) {
        throw new Error('Paciente no encontrado');
    }
    return paciente;
}

// Actualizar un paciente por email
async function actualizarPaciente(email, body) {
    const paciente = await Paciente.findOneAndUpdate({ email }, body, { new: true });

    if (!paciente) {
        throw new Error('Paciente no encontrado');
    }
    return paciente;
}

// Eliminar un paciente por email
async function eliminarPaciente(email) {
    const paciente = await Paciente.findOneAndDelete({ email });

    if (!paciente) {
        throw new Error('Paciente no encontrado');
    }
    return { message: 'Paciente eliminado' };
}

module.exports = {
    crearPaciente,
    obtenerPacientes,
    obtenerPacientePorEmail,
    actualizarPaciente,
    eliminarPaciente,
};
