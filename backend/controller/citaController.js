const logic = require('../logic/citaLogic'); // Asegúrate de que la ruta sea correcta
const { citaSchemaValidation } = require('../validations/citaValidations'); // Suponiendo que tienes un esquema de validación

// Controlador para listar todas las citas
const listarCitas = async (req, res) => {
    try {
        const citas = await logic.obtenerCitas();
        if (citas.length === 0) {
            return res.status(204).send(); // 204 No Content
        }
        res.json(citas);
    } catch (err) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para crear una nueva cita
const crearCita = async (req, res) => {
    const body = req.body;
    const { error, value } = citaSchemaValidation.validate({
        fecha: body.fecha,
        hora: body.hora,
        paciente: body.paciente,
        doctor: body.doctor,
        motivo: body.motivo,
        estado: body.estado,
    });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const nuevaCita = await logic.crearCita(value);
        res.status(201).json(nuevaCita);
    } catch (err) {
        if (err.message === 'Ya existe una cita en esta fecha y hora para el paciente y doctor especificados.') {
            return res.status(409).json({ error: err.message });
        }
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener una cita por ID
const obtenerCitaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const cita = await logic.obtenerCitaPorId(id);
        res.json(cita);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Controlador para actualizar una cita por ID
const actualizarCita = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const { error, value } = citaSchemaValidation.validate({
        fecha: body.fecha,
        hora: body.hora,
        paciente: body.paciente,
        doctor: body.doctor,
        motivo: body.motivo,
        estado: body.estado,
    });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const citaActualizada = await logic.actualizarCita(id, value);
        res.json(citaActualizada);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Controlador para eliminar una cita por ID
const eliminarCita = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await logic.eliminarCita(id);
        res.json(result);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Exportar los controladores
module.exports = {
    listarCitas,
    crearCita,
    obtenerCitaPorId,
    actualizarCita,
    eliminarCita,
};
