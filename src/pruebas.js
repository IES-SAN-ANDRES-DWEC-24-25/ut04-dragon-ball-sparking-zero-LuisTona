const Luchador = require('./Luchador');
const simularBatalla = require('./simularBatalla');
const Torneo = require('./Torneo');
// console.log("prueba");


const luchadores = [
    new Luchador('Goku', 95, 90, 80,),
    new Luchador('Piccolo', 40, 40, 30),
    new Luchador('Mr. Satan', 25, 35, 55)
];

// simularBatalla(new Luchador('Goku', 95, 90, 80),new Luchador('Piccolo', 40, 90, 30),)
Torneo.iniciar
// for(let i of luchadores){

//     console.log(i.stats.nombre);

// }