const pacienteLogic = require('../logic/pacienteLogic');
const { pacienteSchemaValidation } = require('../validaciones/paciente_validations');

// Controlador para listar todos los pacientes
const listarPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteLogic.obtenerPacientes();
    if (pacientes.length === 0) {
      return res.status(204).send(); // 204 No Content
    }
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para crear un nuevo paciente
const crearPaciente = async (req, res) => {
  const body = req.body;
  const { error, value } = pacienteSchemaValidation.validate({
    nombre: body.nombre,
    fechaNacimiento: body.fechaNacimiento,
    teléfono: body.telefono,
    email: body.email,
    dirección: body.direccion,
  });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nuevoPaciente = await pacienteLogic.crearPaciente(value);
    res.status(201).json(nuevoPaciente);
  } catch (err) {
    if (err.message === 'El paciente ya existe con ese email.') {
      return res.status(409).json({ error: err.message });
    }
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para obtener un paciente por email
const obtenerPacientePorEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const paciente = await pacienteLogic.obtenerPacientePorEmail(email);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para actualizar un paciente por email
const actualizarPaciente = async (req, res) => {
  const { email } = req.params;
  const body = req.body;
  const { error, value } = pacienteSchemaValidation.validate({
    nombre: body.nombre,
    fechaNacimiento: body.fechaNacimiento,
    teléfono: body.telefono,
    email: body.email,
    dirección: body.direccion,
  });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const pacienteActualizado = await pacienteLogic.actualizarPaciente(email, value);
    if (!pacienteActualizado) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json(pacienteActualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para eliminar un paciente por email
const eliminarPaciente = async (req, res) => {
  const { email } = req.params;
  try {
    const resultado = await pacienteLogic.eliminarPaciente(email);
    if (!resultado) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }
    res.json({ message: 'Paciente eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Exportar los controladores
module.exports = {
  listarPacientes,
  crearPaciente,
  obtenerPacientePorEmail,
  actualizarPaciente,
  eliminarPaciente,
};
