const Luchador = require('./Luchador');
const simularBatalla = require('./simularBatalla');
const Torneo = require('./Torneo');


const luchadores = [
    new Saiyan('Goku', 85, 70, 65, 110),
    new Namekian('Piccolo', 50, 40, 40, 120),
    new Earthling('Mr. Satan', 25, 35, 95, 100),
    new Namekian('Freezer', 60, 35, 55, 145),
    new Saiyan('Gohan', 65, 60, 70, 120),
    new Earthling('Trunks', 70 , 55, 60, 140),
    new Saiyan('Vegeta', 80, 65, 70, 120),
    new Earthling('Yamcha', 70, 55, 55, 140),
];

let torneo = new Torneo(luchadores)
torneo.iniciar()
