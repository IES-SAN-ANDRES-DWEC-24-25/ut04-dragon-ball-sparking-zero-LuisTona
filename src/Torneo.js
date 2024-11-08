// src/Torneo.js

const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
    if(!esPotenciaDeDos(luchadores.length)){
      throw new Error("El número de luchadores debe ser una potencia de 2.");
    }else{
      this.luchadores = luchadores;
    }
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    
    let participantes = [...this.luchadores]; // Copiar el array de luchadores
    mezclarArray(participantes);

    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);
    let ronda = 0;
    // Simular rondas hasta que quede un solo luchador
    while(participantes.length > 1){
      ronda += 1;
      console.log('ronda: ' + ronda);
      for(let i = 0; i <= participantes.length-1; i += 1){
        participantes.push(simularBatalla(participantes[i-i], participantes[i-i+1]));
        participantes.splice(0,2);
      }
    }

    const campeón = participantes[0];
    console.log(`El campeón del torneo es ${campeón.stats.nombre}!\n`);
    return campeón;
  }
}

module.exports = Torneo;
