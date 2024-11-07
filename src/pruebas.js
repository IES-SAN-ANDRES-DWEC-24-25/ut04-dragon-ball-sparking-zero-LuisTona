const Luchador = require('./Luchador');
const simularBatalla = require('./simularBatalla');
const Torneo = require('./Torneo');


const luchadores = [
    new Luchador('Goku', 95, 90, 80,),
    new Luchador('Piccolo', 40, 40, 30),
    new Luchador('Mr. Satan', 25, 35, 55),
    new Luchador('Mr. Satan', 25, 35, 55),
];

// simularBatalla(luchadores);
let torneo = new Torneo(luchadores)
torneo.iniciar()
// for(let i of luchadores){

//     console.log(i.stats.nombre);

// }