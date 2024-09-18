const express = require('express');
const router = express.Router();
const doctorsController = require('../controller/doctorController');

// Rutas para doctores
router.post('/', doctorsController.crearDoctor);
router.get('/', doctorsController.listarDoctores);
router.get('/:email', doctorsController.obtenerDoctorPorEmail);
router.put('/:email', doctorsController.actualizarDoctor);
router.delete('/:email', doctorsController.eliminarDoctor);

module.exports = router;
