const express = require('express');
const router = express.Router();

const emailController = require('../controllers/emailController');
const auth = require('../middleware/auth');

// Agrega nuevas empresas via POST
router.post('/send',
    emailController.sendEmail
);
module.exports = router;