const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Para manejar variables de entorno
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
dotenv.config(); // Carga las variables del archivo .env


// Swagger
const { swaggerUi, swaggerSpec } = require('./swagger/swagger'); // Swagger Spec
const swaggerUI = require('swagger-ui-express');

// Importar las rutas
const citaRoutes = require('./routes/citaRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');

// Conectar a MongoDB

// Llamar a la función para conectar a MongoDB Atlas
connectDB();

// Inicializar la aplicación Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
const corsOptions = {
    origin: '*', // Ajusta esto con los dominios permitidos de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Rutas de Swagger para documentación
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Configurar rutas de API
app.use('/api/citas', citaRoutes);
app.use('/api/doctores', doctorRoutes);
app.use('/api/pacientes', pacienteRoutes);

app.use('/api/auth', authRoutes);

const port = 3000; // Establece el puerto directamente en el código

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('API REST ejecutándose correctamente...');
});



// Puerto y servidor
//const port = process.env.PORT || 3000;

//app.listen(port, () => {
  //  console.log(`Servidor corriendo en http://localhost:${port}`);
    //console.log('API REST ejecutándose correctamente...');
//});


