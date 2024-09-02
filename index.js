import app from './server.js'
import connection from './database.js'

const port = process.env.PORT || 5000;

connection()

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
