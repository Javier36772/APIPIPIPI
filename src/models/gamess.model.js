const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Cuenta: {
        type: String,
        required: true,
    },
    Precio: {
        type: String,
        required: true,
    },
    Imagen: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Gamess', gamesSchema);