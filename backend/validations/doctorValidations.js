const Joi = require('@hapi/joi');

// Validaciones para el objeto Doctor
const doctorSchemaValidation = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(50)
    .required()
    .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/)
    .messages({
      'string.base': 'El nombre debe ser un texto',
      'string.empty': 'El nombre no puede estar vacío',
      'string.min': 'El nombre debe tener al menos 3 caracteres',
      'string.max': 'El nombre no debe exceder los 50 caracteres',
      'string.pattern.base': 'El nombre solo puede contener letras y espacios',
      'any.required': 'El nombre es un campo requerido',
    }),

  especialidad: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'La especialidad debe ser un texto',
      'string.empty': 'La especialidad no puede estar vacía',
      'string.min': 'La especialidad debe tener al menos 3 caracteres',
      'string.max': 'La especialidad no debe exceder los 50 caracteres',
      'any.required': 'La especialidad es un campo requerido',
    }),

  telefono: Joi.string()
    .pattern(/^\d{7,15}$/)
    .optional()
    .allow('')
    .messages({
      'string.base': 'El teléfono debe ser un texto',
      'string.empty': 'El teléfono no puede estar vacío',
      'string.pattern.base': 'El teléfono debe tener entre 7 y 15 dígitos',
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu', 'co'] } })
    .required()
    .messages({
      'string.base': 'El correo electrónico debe ser un texto',
      'string.empty': 'El correo electrónico no puede estar vacío',
      'string.email': 'El correo electrónico debe tener un formato válido',
      'any.required': 'El correo electrónico es un campo requerido',
    }),
});

module.exports = { doctorSchemaValidation };
