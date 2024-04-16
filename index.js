require('dotenv').config();
require('./src/configs/db.config');

const express = require('express');
const cors = require('cors'); // Agregamos la dependencia CORS
const app = express();
const PORT = process.env.PORT;

//controladores 
const usuariosRouter = require('./src/routes/usuario.route');
const regionRouter = require('./src/routes/Region.route');
const tarjetaRouter = require('./src/routes/tarjeta.route');
const tipoRouter = require('./src/routes/tipo.route');
const gamessRouter = require('./src/routes/Gamess.route');
const authRoutes = require('./src/middlewares/auth.middleware');

// Agregamos el middleware CORS a nuestra aplicación Express
app.use(cors({
    origin: '*'
}));

//rutas
app.use(express.json());
app.use('/Usuarios', usuariosRouter);
app.use('/Region', regionRouter);
app.use('/Tarjeta', tarjetaRouter); 
app.use('/Tipo', tipoRouter);
app.use('/Gamess', gamessRouter);

app.listen(PORT, () => {
    console.log("API escuchando en el puerto " + PORT);
});