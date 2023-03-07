"use strict"

class Personaje {
    constructor(nombre, raza, alineamiento, fuerza, vida, suerte) {
        this.nombre = nombre;
        this.raza = raza;
        this.alineamiento = alineamiento;
        this.fuerza = fuerza;
        this.vida = vida;
        this.suerte = suerte;
    }
    getFuerza() {
        return this.fuerza;
    }
}