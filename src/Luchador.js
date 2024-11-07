// src/Luchador.js

class Luchador {
  #nombre
  #ataque
  #velocidad
  #defensa
  #salud

    // Implementa el constructor y los métodos necesarios
    constructor(nombre, ataque, velocidad, defensa, salud = 100){
      this.#nombre = nombre;
      this.#ataque = ataque;
      this.#velocidad = velocidad;
      this.#defensa = defensa;
      this.#salud = salud
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
    
    set salud(salud){
      this.#salud = salud;
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
      console.log(oponente.stats);
      console.log(this.#nombre);
      // Calcular daño
      
  
      // Asegurar que el daño no sea negativo
      
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
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
  