// src/Torneo.js

const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
    this.luchadores = luchadores;
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    
    let participantes = this.luchadores; // Copiar el array de luchadores
    mezclarArray(participantes);
    if(esPotenciaDeDos(participantes.length) !== 0){
      throw ("El número de luchadores debe ser una potencia de 2.");
    }

    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);

    // Simular rondas hasta que quede un solo luchador
    for(let i = 0; i < participantes.length; i + 2){
      simularBatalla(participantes[i], participantes[i+1])
    }

    const campeón = participantes[0];
    console.log(`El campeón del torneo es ${campeón.nombre}!\n`);
    return campeón;
  }
}

module.exports = Torneo;
