// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');
const Luchador = require('./Luchador');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Luchador('Goku', 95, 90, 80, 100),
    new Luchador('Piccolo', 40, 40, 30, 100),
    new Luchador('Mr. Satan', 25, 35, 55, 100)
];

// Crear y iniciar el torneo
let torneo = new Torneo(luchadores)
torneo.iniciar()
