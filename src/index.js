// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');
const Luchador = require('./Luchador');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Saiyan('Goku', 85, 70, 65, 115),
    new Namekian('Piccolo', 50, 40, 40, 120),
    new Earthling('Mr. Satan', 25, 35, 95, 100),
    new Namekian('Freezer', 60, 35, 55, 145),
    new Saiyan('Gohan', 75, 60, 70, 120),
    new Earthling('Trunks', 70 , 55, 60, 140),
    new Saiyan('Vegeta', 80, 65, 70, 120),
    new Earthling('Yamcha', 70, 55, 55, 140),
];

// Crear y iniciar el torneo
let torneo = new Torneo(luchadores)
torneo.iniciar()
