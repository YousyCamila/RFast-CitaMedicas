const Cita = require('../models/citaModels');

// Crear una nueva cita
exports.createCita = async (req, res) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.status(201).json(cita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las citas
exports.getCitas = async (req, res) => {
  try {
    const citas = await Cita.find().populate('medico usuario');
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una cita por ID
exports.getCitaById = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id).populate('medico usuario');
    if (cita) {
      res.json(cita);
    } else {
      res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una cita por ID
exports.updateCita = async (req, res) => {
  try {
    const cita = await Cita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('medico usuario');
    if (cita) {
      res.json(cita);
    } else {
      res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una cita por ID
exports.deleteCita = async (req, res) => {
  try {
    const cita = await Cita.findByIdAndDelete(req.params.id);
    if (cita) {
      res.json({ message: 'Cita eliminada' });
    } else {
      res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

