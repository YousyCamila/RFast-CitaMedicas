const express = require('express');
const router = express.Router();
const citasController = require('../controller/citaController');

// Crear una nueva cita
router.post('/', citasController.createCita);

// Obtener todas las citas
router.get('/', citasController.getCitas);

// Obtener una cita por ID
router.get('/:id', citasController.getCitaById);

// Actualizar una cita por ID
router.put('/:id', citasController.updateCita);

// Eliminar una cita por ID
router.delete('/:id', citasController.deleteCita);

module.exports = router;
