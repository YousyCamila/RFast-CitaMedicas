const express = require('express');
const router = express.Router();
const citasController = require('../controller/citaController');
// Crear una nueva cita
router.post('/', citasController.crearCita);

// Obtener todas las citas
router.get('/', citasController.listarCitas);

// Obtener una cita por ID
router.get('/:id', citasController.obtenerCitaPorId);

// Actualizar una cita por ID
router.put('/:id', citasController.actualizarCita);

// Eliminar una cita por ID
router.delete('/:id', citasController.eliminarCita);

module.exports = router;
