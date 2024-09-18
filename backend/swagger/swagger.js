const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración básica de Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Asignacion de citas', // Título para la documentación
    version: '1.0.0', // Versión de la API
    description: 'Documentación de la API para la gestión de citas', // Descripción
  },
  servers: [
    {
      url: 'http://localhost:3001/api/', // Cambia esto por la URL de tu servidor
      description: 'Servidor de desarrollo',
    },
  ],
  tags: [
    {
      name: 'Citas',
      description: 'Operaciones relacionadas con las citas'
    },
    {
      name: 'Pacientes',
      description: 'Operaciones relacionadas con los pacientes',
    },

    {
        name: 'Doctores',
        description: 'Operaciones relacionadas con los doctores',
      },
  ],
  // Puedes definir otros tags aquí si tienes más grupos de endpoints
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ruta a los archivos que contienen anotaciones de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports={
  swaggerUi,
  swaggerSpec,
};