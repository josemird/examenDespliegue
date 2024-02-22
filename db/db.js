//se encarga de las conexiones a la base de datos
const mongoose = require('mongoose');

const URI = "mongodb+srv://usuario:12345678abc@cluster0.ulerm98.mongodb.net/rickandmorty?retryWrites=true&w=majority";
mongoose.connect(URI, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión'));
db.once('open', () => {console.log('Conectado a esta puta mierda con exito');});
    