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
    
    const ganador = velocidad();
    
    
    // Determinar quién ataca primero basado en la velocidad
    function velocidad(){

      if(luchador1.stats.velocidad == luchador2.stats.velocidad){
      
        if((Math.floor(Math.random()*10))%2 > 0){
          
          console.log(`${luchador1.stats.nombre} tiene mayor velocidad y ataca primero.`);
          return luchar(luchador1, luchador2);
        }else{
          
          console.log(`${luchador2.stats.nombre} tiene mayor velocidad y ataca primero.`);
          return luchar(luchador2, luchador1);
        }
        
      }else if(luchador1.stats.velocidad > luchador2.stats.velocidad){
        
        console.log(`${luchador1.stats.nombre} tiene mayor velocidad y ataca primero.`);
        return luchar(luchador1, luchador2);
        
      }else{
        console.log(`${luchador2.stats.nombre} tiene mayor velocidad y ataca primero.`);
        return luchar(luchador2, luchador1);
      }
    }
    // Si la velocidad es igual, elegir al azar
    
    function luchar(luchador1, luchador2){
      // let turno = 0;
      while(luchador1.estaVivo(luchador1) !== false && luchador2.estaVivo(luchador2) !== false){ 
      
        
        luchador1.atacar(luchador2);
        
        if(luchador2.stats.salud <= 0){
          return luchador1;
        }
        luchador2.atacar(luchador1);

        if(luchador1.stats.salud <= 0){
          return luchador2;
        }
      }
        


      }
      
    // Simular turnos hasta que uno de los luchadores pierda
    
    console.log(`El ganador de la batalla es ${ganador.stats.nombre}!\n`);
    return ganador;
  }
  
  module.exports = simularBatalla;
  