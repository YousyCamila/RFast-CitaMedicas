const logic = require('../logic/doctores_logic'); // Asegúrate de que la ruta sea correcta
const { doctorSchemaValidation } = require('../validaciones/doctor_validations'); // Suponiendo que tienes un esquema de validación

// Controlador para listar todos los doctores
const listarDoctores = async (req, res) => {
    try {
        const doctores = await logic.obtenerDoctores();
        if (doctores.length === 0) {
            return res.status(204).send(); // 204 No Content
        }
        res.json(doctores);
    } catch (err) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para crear un nuevo doctor
const crearDoctor = async (req, res) => {
    const body = req.body;
    const { error, value } = doctorSchemaValidation.validate({
        nombre: body.nombre,
        email: body.email,
        especialidad: body.especialidad,
        telefono: body.telefono,
        direccion: body.direccion,
        estado: body.estado,
    });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const nuevoDoctor = await logic.crearDoctor(value);
        res.status(201).json(nuevoDoctor);
    } catch (err) {
        if (err.message === 'El doctor ya existe con ese email.') {
            return res.status(409).json({ error: err.message });
        }
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener un doctor por email
const obtenerDoctorPorEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const doctor = await logic.obtenerDoctorPorEmail(email);
        res.json(doctor);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Controlador para actualizar un doctor por email
const actualizarDoctor = async (req, res) => {
    const { email } = req.params;
    const body = req.body;
    const { error, value } = doctorSchemaValidation.validate({
        nombre: body.nombre,
        email: body.email,
        especialidad: body.especialidad,
        telefono: body.telefono,
        direccion: body.direccion,
        estado: body.estado,
    });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const doctorActualizado = await logic.actualizarDoctor(email, value);
        res.json(doctorActualizado);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Controlador para eliminar un doctor por email
const eliminarDoctor = async (req, res) => {
    const { email } = req.params;
    try {
        const result = await logic.eliminarDoctor(email);
        res.json(result);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Exportar los controladores
module.exports = {
    listarDoctores,
    crearDoctor,
    obtenerDoctorPorEmail,
    actualizarDoctor,
    eliminarDoctor,
};
