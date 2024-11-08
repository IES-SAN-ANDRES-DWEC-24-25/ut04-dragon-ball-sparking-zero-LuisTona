// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador {
#regeneraciones
  constructor(nombre, ataque, velocidad, defensa, salud, regenSalud = false, regeneraciones = 2){
    super(nombre, velocidad, ataque, defensa, salud);
    this.regenSalud = regenSalud;
    this.#regeneraciones = regeneraciones;
  }
  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    
    if(this.regenSalud == false && this.#regeneraciones > 0){
      console.log('regeneracion de:'+ this.stats.nombre ,this.#regeneraciones);
      this.salud = this.stats.salud + 30;
      this.#regeneraciones -= 1; 
    }
    if(this.#regeneraciones == 0){
      console.log('No le quedan mas regeneraciones');
      this.regenSalud = true;
    }
  }

  recibirDanio(danio) {
    this.salud = danio;
    if(this.stats.salud < 0){
      this.salud = 0
    }else{
      if(this.stats.salud <= 50 && this.regenSalud == false){
        this.regenerarSalud();
      }
    }
    
  }
}

module.exports = Namekian;
