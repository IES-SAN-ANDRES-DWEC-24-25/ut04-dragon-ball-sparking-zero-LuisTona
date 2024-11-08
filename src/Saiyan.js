const Luchador = require("./Luchador");

// src/Saiyan.js

class Saiyan extends Luchador {
  constructor(nombre, ataque, velocidad, defensa, salud, esSuperSaiyan = false){
    super(nombre, ataque, velocidad, defensa, salud);
    this.esSuperSaiyan = esSuperSaiyan;
  }
  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    console.log(this.stats.nombre+' SE HA TRANSFORMADO EN SUPER SAIYAN!!!!!!!!!!!!!!!!!!!!!!!!!');
      this.esSuperSaiyan = true;
      this.velocidad = this.stats.velocidad * 1.3; 
      this.ataque = this.stats.ataque *1.5 ; 
      this.defensa = this.stats.defensa * 1.2; 
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    console.log(this.stats.nombre+' HA VUELTO A SU FORMA ORIGINAL!!!!!!!!!!');
      this.esSuperSaiyan = false;
      this.velocidad = this.stats.velocidad /1.3;
      this.ataque = this.stats.ataque /1.5 ; 
      this.defensa = this.stats.defensa / 1.2; 
  }

  recibirDanio(danio) {
    this.salud = danio;
    if(this.stats.salud < 0){
      this.salud = 0
    }else{
      if(Math.random() > 0.5 && this.esSuperSaiyan == false){
        this.transformar();
      }else if(this.esSuperSaiyan == true){
        this.revertirTransformacion();
      }
    }
    
  }
}

module.exports = Saiyan;