const express = require('express');
const router = express.Router();

const estadoRoutes = require('./estadoRoutes');
const contactoRoutes = require('./contactoRoutes');

router.use('/estado', estadoRoutes);
router.use('/contacto', contactoRoutes);

module.exports = router;
