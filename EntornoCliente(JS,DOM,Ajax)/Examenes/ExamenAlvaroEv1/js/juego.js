"use strict"

import { getArrayData } from "./main.js";


class Enemigo {
    constructor(fuerza, vida) {
        this.fuerza = fuerza;
        this.vida = vida;
    }
    getFuerza() {
        return this.fuerza;
    }
    getVida() {
        return this.vida;
    }
    setVida(vidaRestante) {
        this.vida = vidaRestante;
    }
}

const personaje = getArrayData()[0];
let noEnemigo = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('start').addEventListener("click", function () {
        document.getElementById('start').style.display = "none";
        document.getElementById('tagJuego').classList.remove("noDisplay");
        const vidaPropia = document.getElementById('vidaPropia');
        vidaPropia.appendChild(document.createTextNode(personaje.vida));
        let enemy = generateEnemy(noEnemigo);
        document.getElementById("flojo").addEventListener("click", function () {
            if (lightAttackHits()) {
                let lightDmg = lightAttackDmg();
                enemy.setVida(parseInt(enemy.getVida) - parseInt(lightDmg));
                addHistorico("ataque ligero", lightDmg);
                // actualizarVidaEnemigo(enemy.vida);
                enemyAttack(enemy);
                addHistoricoBicho(enemy.getFuerza);
            } else {
                addHistorico("ataque ligero", 0);
            }

            if (enemy.vida < 1) {
                //TODO generar el enemigo1
            }
        });
        document.getElementById("normal").addEventListener("click", function () {
            if (mediumAttackHits()) {
                let mediumDmg = mediumAttackDmg();
                enemy.setVida(parseInt(enemy.getVida) - parseInt(mediumDmg));
                addHistorico("ataque medio", mediumDmg);
                // actualizarVidaEnemigo(enemy.vida);
                enemyAttack(enemy);
                addHistoricoBicho(enemy.getFuerza);
            } else {
                addHistorico("ataque medio", 0);
            }

            if (enemy.vida < 1) {
                //TODO generar el enemigo1
            }
        });
        document.getElementById("fuerte").addEventListener("click", function () {
            if (heavyAttackHits()) {
                let heavyDmg = heavyAttackDmg();
                enemy.setVida(parseInt(enemy.getVida) - parseInt(heavyDmg));
                addHistorico("ataque pesado", heavyDmg);
                // actualizarVidaEnemigo(enemy.vida);
                enemyAttack(enemy);
                addHistoricoBicho(enemy.getFuerza);
            } else {
                addHistorico("ataque pesado", 0);
            }

            if (enemy.vida < 1) {
                //TODO generar el enemigo1
            }
        });
    })

});

function enemyAttack(enemigo) {
    return parseInt(personaje.vida) - parseInt(enemigo.getFuerza());
}

function addHistoricoBicho(dmg) {
    const historico = document.getElementById("historico");
    const nuevoAtaque = document.createElement('p');
    const textoAtaque = document.createTextNode(`Te han hecho ${dmg} puntos de daño.`);
    nuevoAtaque.appendChild(textoAtaque);
    historico.appendChild(nuevoAtaque);
}

function addHistorico(tipoAtaque, dmg) {
    const historico = document.getElementById("historico");
    const nuevoAtaque = document.createElement('p');
    const textoAtaque = document.createTextNode(`Has hecho ${dmg} con un ataque ${tipoAtaque}.`);
    nuevoAtaque.appendChild(textoAtaque);
    historico.appendChild(nuevoAtaque);
}

// function actualizarVidaEnemigo(hp) {
//     const vidaEnemigo = document.getElementById("vidaEnemigo");
//     vidaEnemigo.replaceChild(document.createTextNode(hp), document.getElementById("vidaEnemigo"));
// }

function generateEnemy(number) {
    const enemigoImg = document.getElementById("enemigoImg");
    enemigoImg.setAttribute("src", `img/enemy_${number}.webp`);
    const vidaEnemigo = document.getElementById("vidaEnemigo");
    const vidaAleatoria = document.createTextNode(getRandomEnemyHealth());
    vidaEnemigo.appendChild(vidaAleatoria);
    const enemy = new Enemigo(getRandomEnemyStrength(), vidaAleatoria);
    return enemy;
}

function getRandomEnemyHealth() {
    return Math.floor(Math.random() * 16) + 5;
}

function getRandomEnemyStrength() {
    return Math.floor(Math.random() * 5 + 1);
}

function lightAttackHits() {
    return (Math.floor(Math.random() * 11 + (parseInt(personaje.suerte / 100))) > 1);
}

function lightAttackDmg() {
    return 1 + parseInt(personaje.fuerza / 3);
}

function mediumAttackHits() {
    return (Math.floor(Math.random() * 11 + (parseInt(personaje.suerte / 100))) > 3);
}

function mediumAttackDmg() {
    return 3 + parseInt(personaje.fuerza / 2);
}

function heavyAttackHits() {
    return (Math.floor(Math.random() * 11 + (parseInt(personaje.suerte / 100))) > 5);
}

function heavyAttackDmg() {
    return 5 + parseInt(personaje.fuerza);
}