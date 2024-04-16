const express = require('express');
const validateToken = require('../middlewares/auth.middleware');
const router = express.Router();
const UsuarioController = require('../controllers/Usuario.controller');
const rateLimit = require("express-rate-limit");

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 2, 
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });
  
// Ruta para crear un nuevo usuario
router.post('/usuarios', accountLimiter ,UsuarioController.createUsuario);

// Ruta para obtener todos los usuarios
router.get('/usuarios' ,accountLimiter, UsuarioController.getAllUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/usuarios/:id',validateToken, UsuarioController.getUsuarioById);

// Ruta para actualizar un usuario por su ID
router.patch('/usuarios/:id',validateToken, UsuarioController.updateUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/usuarios/:id',validateToken, UsuarioController.deleteUsuario);

// Ruta para iniciar sesión
router.post('/login', accountLimiter, UsuarioController.loginUsuario);

module.exports = router;
