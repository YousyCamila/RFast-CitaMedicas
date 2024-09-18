const Joi = require('@hapi/joi');

// Validaciones para el objeto Paciente
const pacienteSchemaValidation = Joi.object({
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

  fechaNacimiento: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': 'La fecha de nacimiento debe ser una fecha válida',
      'date.iso': 'La fecha de nacimiento debe estar en formato ISO',
      'any.required': 'La fecha de nacimiento es un campo requerido',
    }),

  telefono: Joi.string()
    .pattern(/^\d{7,15}$/)
    .required()
    .messages({
      'string.base': 'El teléfono debe ser un texto',
      'string.empty': 'El teléfono no puede estar vacío',
      'string.pattern.base': 'El teléfono debe tener entre 7 y 15 dígitos',
      'any.required': 'El teléfono es un campo requerido',
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu'] } })
    .required()
    .messages({
      'string.base': 'El correo electrónico debe ser un texto',
      'string.empty': 'El correo electrónico no puede estar vacío',
      'string.email': 'El correo electrónico debe tener un formato válido',
      'any.required': 'El correo electrónico es un campo requerido',
    }),

  direccion: Joi.string()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'La dirección debe ser un texto',
      'string.empty': 'La dirección no puede estar vacía',
      'string.min': 'La dirección debe tener al menos 5 caracteres',
      'string.max': 'La dirección no debe exceder los 100 caracteres',
      'any.required': 'La dirección es un campo requerido',
    }),
});

module.exports = { pacienteSchemaValidation };

