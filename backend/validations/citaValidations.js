const Joi = require('@hapi/joi');

// Validaciones para el objeto Cita
const citaSchemaValidation = Joi.object({
  fecha: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': 'La fecha debe ser una fecha válida',
      'date.iso': 'La fecha debe estar en formato ISO',
      'any.required': 'La fecha es un campo requerido',
    }),

  hora: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .messages({
      'string.base': 'La hora debe ser un texto',
      'string.empty': 'La hora no puede estar vacía',
      'string.pattern.base': 'La hora debe estar en formato HH:mm (24 horas)',
      'any.required': 'La hora es un campo requerido',
    }),

  paciente: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'El nombre del paciente debe ser un texto',
      'string.empty': 'El nombre del paciente no puede estar vacío',
      'string.min': 'El nombre del paciente debe tener al menos 3 caracteres',
      'string.max': 'El nombre del paciente no debe exceder los 50 caracteres',
      'any.required': 'El nombre del paciente es un campo requerido',
    }),

  doctor: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'El nombre del doctor debe ser un texto',
      'string.empty': 'El nombre del doctor no puede estar vacío',
      'string.min': 'El nombre del doctor debe tener al menos 3 caracteres',
      'string.max': 'El nombre del doctor no debe exceder los 50 caracteres',
      'any.required': 'El nombre del doctor es un campo requerido',
    }),

  motivo: Joi.string()
    .min(5)
    .max(200)
    .required()
    .messages({
      'string.base': 'El motivo debe ser un texto',
      'string.empty': 'El motivo no puede estar vacío',
      'string.min': 'El motivo debe tener al menos 5 caracteres',
      'string.max': 'El motivo no debe exceder los 200 caracteres',
      'any.required': 'El motivo es un campo requerido',
    }),

  estado: Joi.string()
    .valid('Pendiente', 'Confirmada', 'Cancelada')
    .default('Pendiente')
    .messages({
      'string.base': 'El estado debe ser un texto',
      'any.only': 'El estado debe ser uno de los siguientes: Pendiente, Confirmada, Cancelada',
    }),
});

module.exports = { citaSchemaValidation };
