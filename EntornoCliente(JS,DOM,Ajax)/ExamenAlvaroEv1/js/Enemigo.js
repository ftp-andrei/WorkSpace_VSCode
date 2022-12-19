"use strict"

class Enemigo {
    constructor(fuerza, vida) {
        this.fuerza = fuerza;
        this.vida = vida;
    }
    getFuerza() {
        return this.fuerza;
    }
    setVida(vidaRestante){
        this.vida=vidaRestante;
    }
}