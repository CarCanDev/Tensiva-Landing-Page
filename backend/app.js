const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json());

// Rutas modulares bajo /api
app.use('/api', apiRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ ok: false, mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(` Servidor Tensiva corriendo en http://localhost:${PORT}`);
});