const express = require('express');
const router = express.Router();
const doctorsController = require('../controller/doctorController');

// Crear un nuevo doctor
/**
 * @swagger
 * /doctors:
 *   post:
 *     summary: Crear un nuevo doctor
 *     tags: ["Doctores"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: " Juan Pérez"
 *               especialidad:
 *                 type: string
 *                 example: "Cardiología"
 *               telefono:
 *                 type: string
 *                 example: "1234567890"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *     responses:
 *       201:
 *         description: Doctor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Dr. Juan Pérez"
 *                 especialidad:
 *                   type: string
 *                   example: "Cardiología"
 *                 telefono:
 *                   type: string
 *                   example: "+1234567890"
 *                 email:
 *                   type: string
 *                   example: "juan.perez@example.com"
 *                 direccion:
 *                   type: string
 *                   example: "123 Calle Principal, Ciudad, País"
 *       400:
 *         description: Error de validación
 */

 
router.post('/', doctorsController.crearDoctor);

// Obtener todos los doctores
/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Obtener todos los doctores
 *     tags: ["Doctores"]
 *     responses:
 *       200:
 *         description: Lista de doctores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     example: "Dr. Juan Pérez"
 *                   especialidad:
 *                     type: string
 *                     example: "Cardiología"
 *                   telefono:
 *                     type: string
 *                     example: "+1234567890"
 *                   email:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *             example:
 *               - nombre: "Dr. Juan Pérez"
 *                 especialidad: "Cardiología"
 *                 telefono: "+1234567890"
 *                 email: "juan.perez@example.com"
 *               - nombre: "Dra. María Gómez"
 *                 especialidad: "Pediatría"
 *                 telefono: "+0987654321"
 *                 email: "maria.gomez@example.com"
 *       500:
 *         description: Error del servidor
 */
router.get('/', doctorsController.listarDoctores);

// Obtener un doctor por email
/**
 * @swagger
 * /doctors/{email}:
 *   get:
 *     summary: Obtener un doctor por email
 *     tags: ["Doctores"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del doctor a obtener
 *     responses:
 *       200:
 *         description: Doctor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Dr. Juan Pérez"
 *                 especialidad:
 *                   type: string
 *                   example: "Cardiología"
 *                 telefono:
 *                   type: string
 *                   example: "+1234567890"
 *                 email:
 *                   type: string
 *                   example: "juan.perez@example.com"
 *       404:
 *         description: Doctor no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:email', doctorsController.obtenerDoctorPorEmail);

// Actualizar un doctor por email
/**
 * @swagger
 * /doctors/{email}:
 *   put:
 *     summary: Actualizar un doctor por email
 *     tags: ["Doctores"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del doctor a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Dr. Juan Pérez"
 *               especialidad:
 *                 type: string
 *                 example: "Cardiología"
 *               telefono:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *     responses:
 *       200:
 *         description: Doctor actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Dr. Juan Pérez"
 *                 especialidad:
 *                   type: string
 *                   example: "Cardiología"
 *                 telefono:
 *                   type: string
 *                   example: "+1234567890"
 *                 email:
 *                   type: string
 *                   example: "juan.perez@example.com"
 *       404:
 *         description: Doctor no encontrado
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error del servidor
 */
router.put('/:email', doctorsController.actualizarDoctor);

// Eliminar un doctor por email
/**
 * @swagger
 * /doctors/{email}:
 *   delete:
 *     summary: Eliminar un doctor por email
 *     tags: ["Doctores"]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email del doctor a eliminar
 *     responses:
 *       200:
 *         description: Doctor eliminado exitosamente
 *       404:
 *         description: Doctor no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:email', doctorsController.eliminarDoctor);

module.exports = router;

