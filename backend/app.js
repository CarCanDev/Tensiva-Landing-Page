const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json());

// Ruta de prueba
app.get('/api/estado', (req, res) => {
    res.json({ mensaje: 'El backend está funcionando correctamente' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});