const express = require('express');
const router = express.Router();
const citasController = require('../controller/citaController');

// Crear una nueva cita
/**
 * @swagger
 * /citas:
 *   post:
 *     summary: Crear una nueva cita
 *     tags: ["Citas"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2024-09-18"
 *               hora:
 *                 type: string
 *                 example: "14:00"
 *               paciente:
 *                 type: string
 *                 example: "Ana María"
 *               doctor:
 *                 type: string
 *                 example: "Carlos Andres"
 *               motivo:
 *                 type: string
 *                 example: "Consulta general"
 *               estado:
 *                 type: string
 *                 enum: ['Pendiente', 'Confirmada', 'Cancelada']
 *                 example: "Pendiente"
 *     responses:
 *       201:
 *         description: Cita creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', citasController.crearCita);

// Obtener todas las citas
/**
 * @swagger
 * /citas:
 *   get:
 *     summary: Listar todas las citas
 *     tags: ["Citas"]
 *     responses:
 *       200:
 *         description: Lista de citas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "651edc5565bfc2a7f8e98345"
 *                   fecha:
 *                     type: string
 *                     format: date
 *                     example: "2024-09-18"
 *                   hora:
 *                     type: string
 *                     example: "14:00"
 *                   paciente:
 *                     type: string
 *                     example: "Paciente nombre"
 *                   doctor:
 *                     type: string
 *                     example: "Doctor nombre"
 *                   motivo:
 *                     type: string
 *                     example: "Consulta general"
 *                   estado:
 *                     type: string
 *                     example: "Pendiente"
 */
router.get('/', citasController.listarCitas);

// Obtener una cita por ID
/**
 * @swagger
 * /citas/{id}:
 *   get:
 *     summary: Obtener una cita por ID
 *     tags: ["Citas"]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador único de la cita.
 *     responses:
 *       200:
 *         description: Cita encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "651edc5565bfc2a7f8e98345"
 *                 fecha:
 *                   type: string
 *                   example: "2024-09-18"
 *                 hora:
 *                   type: string
 *                   example: "14:00"
 *                 paciente:
 *                   type: string
 *                   example: "Paciente nombre"
 *                 doctor:
 *                   type: string
 *                   example: "Doctor nombre"
 *                 motivo:
 *                   type: string
 *                   example: "Consulta general"
 *                 estado:
 *                   type: string
 *                   example: "Pendiente"
 *       404:
 *         description: Cita no encontrada
 */
router.get('/:id', citasController.obtenerCitaPorId);

// Actualizar una cita por ID
/**
 * @swagger
 * /citas/{id}:
 *   put:
 *     summary: Actualizar una cita por ID
 *     tags: ["Citas"]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador único de la cita.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 example: "2024-09-18"
 *               hora:
 *                 type: string
 *                 example: "14:00"
 *               paciente:
 *                 type: string
 *                 example: "Paciente nombre"
 *               doctor:
 *                 type: string
 *                 example: "Doctor nombre"
 *               motivo:
 *                 type: string
 *                 example: "Consulta general"
 *               estado:
 *                 type: string
 *                 enum: ['Pendiente', 'Confirmada', 'Cancelada']
 *     responses:
 *       200:
 *         description: Cita actualizada exitosamente
 *       404:
 *         description: Cita no encontrada
 */
router.put('/:id', citasController.actualizarCita);

// Eliminar una cita por ID
/**
 * @swagger
 * /citas/{id}:
 *   delete:
 *     summary: Eliminar una cita por ID
 *     tags: ["Citas"]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Identificador único de la cita.
 *     responses:
 *       200:
 *         description: Cita eliminada exitosamente
 *       404:
 *         description: Cita no encontrada
 */
router.delete('/:id', citasController.eliminarCita);

module.exports = router;
