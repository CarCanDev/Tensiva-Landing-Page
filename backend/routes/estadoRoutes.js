const express = require('express');
const router = express.Router();

// GET /api/estado
router.get('/', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'El backend de Tensiva está funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;
