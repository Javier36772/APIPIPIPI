const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://223323:VMyeJU7IHksY47zV@db4to.2miynyy.mongodb.net/?retryWrites=true&w=majority&appName=db4to/games')
.then(() => console.log("conectado a mongodb exitosamente"))
.catch(console.log);
