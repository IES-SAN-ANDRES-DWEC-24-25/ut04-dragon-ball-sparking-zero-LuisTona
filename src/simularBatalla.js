// src/simularBatalla.js
const Luchador = require("./Luchador");
/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
    console.log(`\nComienza la batalla entre ${luchador1.stats.nombre} y ${luchador2.stats.nombre}!`);
    
    
  
    // Determinar quién ataca primero basado en la velocidad
    if(luchador1.stats.velocidad == luchador2.stats.velocidad){
      if((Math.floor(Math.random()*10))%2 > 0){
        console.log(`${luchador1.stats.nombre} tiene mayor velocidad y ataca primero.`);
      }else{
        console.log(`${luchador2.stats.nombre} tiene mayor velocidad y ataca primero.`);
      }
      
    }else if(luchador1.stats.velocidad > luchador2.stats.velocidad){
      console.log(`${luchador1.stats.nombre} tiene mayor velocidad y ataca primero.`);
    }else{
      console.log(`${luchador2.stats.nombre} tiene mayor velocidad y ataca primero.`);
    }
      // Si la velocidad es igual, elegir al azar
      
  
  
    // Simular turnos hasta que uno de los luchadores pierda
   
      
    const ganador = null;
    // console.log(`El ganador de la batalla es ${ganador.stats.nombre}!\n`);
    return ganador;
  }
  
  module.exports = simularBatalla;
  