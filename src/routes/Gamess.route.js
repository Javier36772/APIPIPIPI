const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/auth.middleware');
const GamesController = require('../controllers/Gamess.controller');
const rateLimit = require("express-rate-limit");

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 2, 
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });

router.post('/games',accountLimiter,GamesController.crear);

router.get('/games', GamesController.getTodo);

router.get('/games/:id',validateToken, GamesController.getPorid);


router.patch('/games/:id',validateToken, GamesController.actualizar);


router.delete('/games/:id',validateToken, GamesController.borrar);

module.exports = router;
