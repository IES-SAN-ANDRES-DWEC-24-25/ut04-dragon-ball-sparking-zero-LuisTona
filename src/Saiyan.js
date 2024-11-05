const Luchador = require("./Luchador");

// src/Saiyan.js

class Saiyan extends Luchador {
  constructor(nombre, ataque, velocidad, defensa, salud, esSuperSaiyan = false){
    super(nombre, velocidad, ataque, defensa, salud);
    this.esSuperSaiyan = esSuperSaiyan;
  }
  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if(!this.esSuperSaiyan){
      this.esSuperSaiyan = true;
      this.velocidad *= 1.3; 
      this.ataque *= 1.5; 
      this.defensa *= 1.2; 
    }
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    if(this.esSuperSaiyan){
      this.esSuperSaiyan = false;
      this.velocidad /= 1.3; 
      this.ataque /= 1.5 ; 
      this.defensa /= 1.2 ; 
    }
  }
}

module.exports = Saiyan;