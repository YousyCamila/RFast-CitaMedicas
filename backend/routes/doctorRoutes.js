const express = require('express');
const router = express.Router();
const doctorsController = require('../controller/doctorController');

// Rutas para doctores
router.post('/', doctorsController.createDoctor);
router.get('/', doctorsController.getDoctors);
router.get('/:email', doctorsController.getDoctorByEmail);
router.put('/:email', doctorsController.updateDoctor);
router.delete('/:email', doctorsController.deleteDoctor);

module.exports = router;
