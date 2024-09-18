const express = require('express');
const router = express.Router();
const pacientesController = require('../controller/pacienteController');

// Rutas para pacientes
router.post('/', pacientesController.crearPaciente);
router.get('/', pacientesController.listarPacientes);
router.get('/:email', pacientesController.obtenerPacientePorEmail);
router.put('/:email', pacientesController.actualizarPaciente);
router.delete('/:email', pacientesController.eliminarPaciente);

module.exports = router;
