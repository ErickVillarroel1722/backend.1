import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importar las rutas
import clientesRoutes from './src/router/clientes.js';
import vehiculosRoutes from './src/router/vehiculos.js';
import reservaRoutes from './src/router/reservas.js';
import adminRoutes from './src/router/admin.js'; // Ruta del login

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5001', // Asegúrate de permitir el origen del frontend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

app.use(express.json());


// Usar las rutas
app.use('/api', clientesRoutes);
app.use('/api', vehiculosRoutes);
app.use('/api', reservaRoutes);
app.use('/api', adminRoutes); // Usar la ruta del login

export default app;
