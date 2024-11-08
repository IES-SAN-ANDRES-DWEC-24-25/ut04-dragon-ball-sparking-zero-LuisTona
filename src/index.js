// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');
const Luchador = require('./Luchador');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Luchador('Goku', 85, 70, 65, 110),
    new Luchador('Piccolo', 50, 40, 40, 120),
    new Luchador('Mr. Satan', 25, 35, 95, 100),
    new Luchador('Freezer', 60, 35, 55, 130),
    new Luchador('Gohan', 65, 60, 70, 120),
    new Luchador('Trunks', 70 , 55, 60, 140),
    new Luchador('Vegeta', 80, 65, 70, 120),
    new Luchador('Yamcha', 70, 55, 55, 140),
];

// Crear y iniciar el torneo
let torneo = new Torneo(luchadores)
torneo.iniciar()
