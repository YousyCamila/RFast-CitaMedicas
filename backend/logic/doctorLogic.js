const Doctor = require('../models/doctorModels');

// Crear un nuevo doctor
async function crearDoctor(body) {
    const doctorExistente = await Doctor.findOne({ email: body.email });

    if (doctorExistente) {
        throw new Error('El doctor ya existe con ese email.');
    }

    const doctor = new Doctor(body);
    return await doctor.save();
}

// Obtener todos los doctores
async function obtenerDoctores() {
    return await Doctor.find();
}

// Obtener un doctor por email
async function obtenerDoctorPorEmail(email) {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
        throw new Error('Doctor no encontrado');
    }
    return doctor;
}

// Actualizar un doctor por email
async function actualizarDoctor(email, body) {
    const doctor = await Doctor.findOneAndUpdate({ email }, body, { new: true });

    if (!doctor) {
        throw new Error('Doctor no encontrado');
    }
    return doctor;
}

// Eliminar un doctor por email
async function eliminarDoctor(email) {
    const doctor = await Doctor.findOneAndDelete({ email });

    if (!doctor) {
        throw new Error('Doctor no encontrado');
    }
    return { message: 'Doctor eliminado' };
}

module.exports = {
    crearDoctor,
    obtenerDoctores,
    obtenerDoctorPorEmail,
    actualizarDoctor,
    eliminarDoctor,
};
