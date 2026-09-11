const express = require('express');
const router = express.Router();
const { responderChat } = require('../controllers/chatController');

// POST /api/chat
router.post('/', responderChat);

module.exports = router;
