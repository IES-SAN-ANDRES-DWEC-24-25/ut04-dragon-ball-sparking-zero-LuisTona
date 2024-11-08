// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador {
  constructor(nombre, ataque, velocidad, defensa, salud, tecnicaEspecial = false){
    super(nombre, velocidad, ataque, defensa, salud);
    this.tecnicaEspecial = tecnicaEspecial;
  }
  /**
   * Usa una técnica especial para aumentar el ataque.
   */

  usarTecnicaEspecial() {
    if(this.tecnicaEspecial == false){
      console.log('HA USADO SU TECNICA ESPECIAL!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      this.tecnicaEspecial = true;
      this.ataque = this.stats.ataque * 1.25;

    }
  }

  revertirTecnica(){
    if(this.tecnicaEspecial == true){
      console.log('HA DEJADO DE USAR SU TECNICA ESPECIAL!!!!!!!!!!!!!');
      this.tecnicaEspecial = false;
      this.ataque = this.stats.ataque / 1.25;
    }
  }

  recibirDanio(danio) {
    this.salud = danio;
    if(this.stats.salud < 0){
      this.salud = 0
    }else{
      if(Math.random() > 0.5 && this.tecnicaEspecial == false){
        this.usarTecnicaEspecial();
      }else if(this.tecnicaEspecial == true){
        this.revertirTecnica();
      }
    }
  }
}

module.exports = Earthling;
