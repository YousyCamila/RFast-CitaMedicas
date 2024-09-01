const mongoose = require('mongoose');

// Función para conectar a la base de datos MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/medicalappointmentsdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB...');
    } catch (err) {
        console.error('No se pudo conectar con MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;


