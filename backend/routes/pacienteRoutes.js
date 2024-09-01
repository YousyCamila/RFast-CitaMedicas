const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacientes');

// Rutas para pacientes
router.post('/', pacientesController.createPaciente);
router.get('/', pacientesController.getPacientes);
router.get('/:email', pacientesController.getPacienteByEmail);
router.put('/:email', pacientesController.updatePaciente);
router.delete('/:email', pacientesController.deletePaciente);

module.exports = router;
