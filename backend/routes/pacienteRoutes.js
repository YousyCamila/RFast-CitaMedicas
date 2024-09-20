const express = require('express');
const router = express.Router();
const pacientesController = require('../controller/pacienteController');

// Crear un nuevo paciente
/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Crear un nuevo paciente
 *     tags: ["Pacientes"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Ana María"
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *                 example: "1990-05-15"
 *               telefono:
 *                 type: string
 *                 example: "1234567890"
 *               email:
 *                 type: string
 *                 example: "ana.maria@example.com"
 *               direccion:
 *                 type: string
 *                 example: "456 Calle Secundaria, Ciudad, País"
 *     responses:
 *       201:
 *         description: Paciente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Ana María"
 *                 fechaNacimiento:
 *                   type: string
 *                   example: "1990-05-15"
 *                 telefono:
 *                   type: string
 *                   example: "1234567890"
 *                 email:
 *                   type: string
 *                   example: "ana.maria@example.com"
 *                 direccion:
 *                   type: string
 *                   example: "456 Calle Secundaria, Ciudad, País"
 *       400:
 *         description: Error de validación
 */
router.post('/', pacientesController.crearPaciente);

// Obtener todos los pacientes
/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Obtener todos los pacientes
 *     tags: ["Pacientes"]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     example: "Ana María"
 *                   fechaNacimiento:
 *                     type: string
 *                     format: date
 *                     example: "1990-05-15"
 *                   telefono:
 *                     type: string
 *                     example: "1234567890"
 *                   email:
 *                     type: string
 *                     example: "ana.maria@example.com"
 *                   direccion:
 *                     type: string
 *                     example: "456 Calle Secundaria, Ciudad, País"
 *             example:
 *               - nombre: "Ana María"
 *                 fechaNacimiento: "1990-05-15"
 *                 telefono: "1234567890"
 *                 email: "ana.maria@example.com"
 *                 direccion: "456 Calle Secundaria, Ciudad, País"
 *               - nombre: "Juan Pérez"
 *                 fechaNacimiento: "1985-04-20"
 *                 telefono: "9876543210"
 *                 email: "juan.perez@example.com"
 *                 direccion: "123 Calle Principal, Ciudad, País"
 *       500:
 *         description: Error del servidor
 */
router.get('/', pacientesController.listarPacientes);

// Obtener un paciente por email
/**
 * @swagger
 * /pacientes/{email}:
 *   get:
 *     summary: Obtener un paciente por email
 *     tags: ["Pacientes"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del paciente a obtener
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Ana María"
 *                 fechaNacimiento:
 *                   type: string
 *                   example: "1990-05-15"
 *                 telefono:
 *                   type: string
 *                   example: "1234567890"
 *                 email:
 *                   type: string
 *                   example: "ana.maria@example.com"
 *                 direccion:
 *                   type: string
 *                   example: "456 Calle Secundaria, Ciudad, País"
 *       404:
 *         description: Paciente no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:email', pacientesController.obtenerPacientePorEmail);

// Actualizar un paciente por email
/**
 * @swagger
 * /pacientes/{email}:
 *   put:
 *     summary: Actualizar un paciente por email
 *     tags: ["Pacientes"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del paciente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Ana María"
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *                 example: "1990-05-15"
 *               telefono:
 *                 type: string
 *                 example: "1234567890"
 *               email:
 *                 type: string
 *                 example: "ana.maria@example.com"
 *               direccion:
 *                 type: string
 *                 example: "456 Calle Secundaria, Ciudad, País"
 *     responses:
 *       200:
 *         description: Paciente actualizado exitosamente
 *       404:
 *         description: Paciente no encontrado
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.put('/:email', pacientesController.actualizarPaciente);

// Eliminar un paciente por email
/**
 * @swagger
 * /pacientes/{email}:
 *   delete:
 *     summary: Eliminar un paciente por email
 *     tags: ["Pacientes"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del paciente a eliminar
 *     responses:
 *       200:
 *         description: Paciente eliminado exitosamente
 *       404:
 *         description: Paciente no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:email', pacientesController.eliminarPaciente);

module.exports = router;

