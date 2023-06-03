const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

const auth = require('../middleware/auth');


// Usuarios
router.post('/crear-cuenta', 
    usuariosController.registrarUsuario
);

router.post('/iniciar-sesion',
    usuariosController.autenticarUsuario
);
router.get('/iniciar-sesion',
    usuariosController.autenticarUsuario
);

module.exports = router;