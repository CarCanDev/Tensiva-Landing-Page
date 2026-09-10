const express = require('express');
const router = express.Router();

const estadoRoutes = require('./estadoRoutes');
const contactoRoutes = require('./contactoRoutes');
const chatRoutes = require('./chatRoutes');

router.use('/estado', estadoRoutes);
router.use('/contacto', contactoRoutes);
router.use('/chat', chatRoutes);

module.exports = router;
