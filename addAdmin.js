const mongoose = require('mongoose');
const Admin = require('./src/models/Admin');
require('dotenv').config();

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Conectado a MongoDB');

        // Crear un nuevo administrador
        const admin = new Admin({
            nombre:'Mateo',
            apellido:'Miño',
            email: 'mateo@ball.com', 
            password: '260611'
        });

        try {
            await admin.save();
            console.log('Administrador creado exitosamente');
        } catch (err) {
            console.error('Error al crear el administrador:', err);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch(err => {
        console.error('Error de conexión a MongoDB:', err);
    });
