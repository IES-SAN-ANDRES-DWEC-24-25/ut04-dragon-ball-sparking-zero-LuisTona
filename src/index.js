// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');
const Luchador = require('./Luchador');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Luchador('Goku', 95, 90, 80,),
    new Luchador('Piccolo', 40, 40, 30),
    new Luchador('Mr. Satan', 25, 35, 55)
];

// Crear y iniciar el torneo
    Torneo.iniciar()
