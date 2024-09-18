const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar las rutas
const citaRoutes = require('./routes/citaRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');


// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/medicalappointmentsdb')
.then(() => console.log('Conectado a MongoDB...'))
.catch(err => console.error('No se pudo conectar con MongoDB:', err));

// Inicializar la aplicación Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Configuración de CORS

// Configurar rutas
app.use('/api/citas', citaRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/pacientes', pacienteRoutes);


// Iniciar el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}...`);
});
