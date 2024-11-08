// src/Luchador.js

class Luchador {
  #nombre
  #ataque
  #velocidad
  #defensa
  #salud

    // Implementa el constructor y los métodos necesarios
    constructor(nombre, ataque, velocidad, defensa, salud){
      this.#nombre = nombre;
      this.#ataque = ataque;
      this.#velocidad = velocidad;
      this.#defensa = defensa;
      this.#salud = salud;
    }

    
    get stats(){
      let stats = {
        'nombre' : this.#nombre,
        'ataque' : this.#ataque,
        'velocidad' : this.#velocidad,
        'defensa' : this.#defensa,
        'salud' : this.#salud
      };
      return stats;
    }
    
    set salud(nuevaSalud){
      this.#salud = nuevaSalud;
    }

    set ataque(ataque){
      this.#ataque = ataque;
    }
    
    set defensa(defensa){
      this.#defensa = defensa;
    }

    set velocidad(velocidad){
      this.#velocidad = velocidad;
    }
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
      if(Math.random() > 0.8){
        console.log(`${oponente.stats.nombre} ha esquivado el ataque`);
      }else{
        console.log(`${oponente.stats.nombre} recibido el ataque`);
        return calcDaño(this.#ataque);
      }

      // Calcular daño
      function calcDaño(ataque){
        // Asegurar que el daño no sea negativo
        if(ataque - oponente.stats.defensa <= 0){
          // Aplicar daño al oponente
          oponente.recibirDanio(oponente.stats.salud - (ataque*0.10));
          console.log(`A ${oponente.stats.nombre} le quedan ${oponente.stats.salud} de vida`);
        }else{
          // Aplicar daño al oponente
          oponente.recibirDanio(oponente.stats.salud - (ataque - oponente.stats.defensa));
          console.log(`A ${oponente.stats.nombre} le quedan ${oponente.stats.salud} de vida`);
        }
      }      
      // Retornar resultado del ataque
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      this.salud = danio;
      if(this.stats.salud < 0){
        this.salud = 0
      }
    }

    /**
     * Verifica si el luchador está vivo.
     * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
    */
   estaVivo(luchador) {
      if(luchador.stats.salud > 0){
        return true;
      }else{
        return false;
      }
    }
  }
  
  module.exports = Luchador;
  