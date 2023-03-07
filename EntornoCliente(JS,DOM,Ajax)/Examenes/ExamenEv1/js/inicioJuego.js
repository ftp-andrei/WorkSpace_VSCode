"use strict";
import { storeData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("startGame")
    .addEventListener("click", function (event) {
      mostrarEnemigo(event);
    });

  document
    .getElementById("lightAttack")
    .addEventListener("click", function (event) {
      ataqueLight(event);
    });

    document
    .getElementById("mediumAttack")
    .addEventListener("click", function (event) {
      ataqueMedium(event);
    });

    document
    .getElementById("heavyAttack")
    .addEventListener("click", function (event) {
        ataqueStrong(event);
    });
});

function mostrarEnemigo(event) {
  let button = document.getElementById("startGame");
  button.remove();

  let body = document.getElementById("inicioJuego");
  let vidaEnemigo = document.createElement("p");
  vidaEnemigo.setAttribute("id", "vidaEnemigo");
  // TODO: Crear random vidaEnemigo
  let randomVidaE = Math.random() * 21;
  let textoEnemigo = document.createTextNode("Vida enemigo:" + 20);
  vidaEnemigo.appendChild(textoEnemigo);
  body.appendChild(vidaEnemigo);
  // TODO: Crear random para imgsRandom
  // let randomImg = Math.random() * 3;
  let img = document.createElement("img");
  img.setAttribute("src", "imgs/enemy_" + 0 + ".webp");

  body.appendChild(img);
  crearBotones();

  let vidaHero = document.createElement("p");
  vidaHero.setAttribute("id", "vidaHero");
  // TODO: Crear random vidaHero
  // let randomVidaH = Math.random() * 21;
  let textoHero = document.createTextNode("Tu vida:" + 20);
  vidaHero.appendChild(textoHero);
  body.appendChild(vidaHero);
}

function crearBotones() {
  let div = document.createElement("div");
  div.setAttribute("id", "botonesAtaque");
  let body = document.getElementById("inicioJuego");
  let lightAttack = document.createElement("input");
  lightAttack.setAttribute("value", "Light Attack");
  lightAttack.setAttribute("id", "lightAttack");
  lightAttack.setAttribute("type", "button");
  div.appendChild(lightAttack);
  let normalAttack = document.createElement("input");
  normalAttack.setAttribute("value", "Normal Attack");
  normalAttack.setAttribute("id", "normalAttack");
  normalAttack.setAttribute("type", "button");
  div.appendChild(normalAttack);
  let heavyAttack = document.createElement("input");
  heavyAttack.setAttribute("value", "Heavy Attack");
  heavyAttack.setAttribute("id", "heavyAttack");
  heavyAttack.setAttribute("type", "button");
  div.appendChild(heavyAttack);
  body.appendChild(div);
}

function ataqueLight(fuerza) {
  let ataque = 1 + truncate(fuerza/3);
  let tipoAtaque = "ataqueLight";
  let probabilidad = Math.random() * 100;
  let suerte=0;
  if(probabilidad>90+suerte){
  let vidaEnemigo = document.getElementById("vidaEnemigo").value;
  vidaEnemigo = vidaEnemigo - ataque;
  document.getElementById("vidaEnemigo") = vidaEnemigo;
  historico(ataque,tipoAtaque);
  }else{
    //TODO: Historico funcional
    historico(ataque,tipoAtaque);
  }
}

function ataqueMedium(fuerza) {
    let ataque = 3 + truncate(fuerza/2);
    let tipoAtaque= "ataqueMedio";
    let probabilidad = Math.random() * 100;
    let suerte=0;
    if(probabilidad>70+suerte){
    let vidaEnemigo = document.getElementById("vidaEnemigo").value;
    vidaEnemigo = vidaEnemigo - ataque;
    document.getElementById("vidaEnemigo") = vidaEnemigo;
    historico(ataque,tipoAtaque);
  }else{
    //TODO: Historico funcional
    historico(ataque,tipoAtaque);
  }
}
  function ataqueStrong(fuerza) {
    let ataque = 5 + fuerza;
    let tipoAtaque= "ataqueFuerte";
    let probabilidad = Math.random() * 100;
    let suerte=0;
    if(probabilidad>70+suerte){
    let vidaEnemigo = document.getElementById("vidaEnemigo").value;
    vidaEnemigo = vidaEnemigo - ataque;
    document.getElementById("vidaEnemigo") = vidaEnemigo;
    historico(ataque,tipoAtaque);
  }else{
    //TODO: Historico funcional
    historico(ataque,tipoAtaque);
  }
}

function historico(dano,tipoAtaque){
  let historico = document.createElement("p");
  let textoHero = document.createTextNode("Has hecho " + dano + " de daño con ataque "+tipoAtaque);
  historico.insertAdjacentHTML("afterbegin", textoHero + "\n");
}