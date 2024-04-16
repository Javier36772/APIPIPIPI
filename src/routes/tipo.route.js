const express = require('express');
const router = express.Router();
const TipoController = require('../controllers/Tipo.controller');
const rateLimit = require("express-rate-limit");
const validateToken = require('../middlewares/auth.middleware');

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 2, 
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });

// Ruta para crear un nuevo tipo
router.post('/tipos', validateToken,TipoController.createTipo);

// Ruta para obtener todos los tipos
router.get('/tipos',validateToken,accountLimiter, TipoController.getTodo);

// Ruta para obtener un tipo por su ID
router.get('/tipos/:id',validateToken, TipoController.getPorid);

// Ruta para actualizar un tipo por su ID
router.patch('/tipos/:id',validateToken, TipoController.actualizar);

// Ruta para eliminar un tipo por su ID
router.delete('/tipos/:id',validateToken, TipoController.borrar);

module.exports = router;
