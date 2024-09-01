const Paciente = require('../models/pacienteModels');

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un paciente por email
exports.getPacienteByEmail = async (req, res) => {
  try {
    const paciente = await Paciente.findOne({ email: req.params.email });
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un paciente por email
exports.updatePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un paciente por email
exports.deletePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findOneAndDelete({ email: req.params.email });
    if (paciente) {
      res.json({ message: 'Paciente eliminado' });
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
