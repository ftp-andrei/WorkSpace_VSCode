"use strict";
import { saveData, getData } from "./arrays.js";
let valImagen = 0;
let cont = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start").addEventListener("click", function (event) {
    mostrarEnemigo();
    document
      .getElementById("lightAttack")
      .addEventListener("click", function () {
        ataqueLight();
      });

    document
      .getElementById("normalAttack")
      .addEventListener("click", function () {
        ataqueMedium();
      });

    document
      .getElementById("heavyAttack")
      .addEventListener("click", function () {
        ataqueHeavy();
      });
  });
});

function mostrarEnemigo() {
  let button = document.getElementById("start");
  button.remove();
  creacionEnemigo();
  creacionImagen();
  crearHistorico();
  crearBotones();
  vidaPersonaje();
}

function huboSuerte(ataque, probabilidad) {
  let random = Math.round(Math.random() * 100);
  // historico
  let textArea = document.getElementById("area");
  // Vida del enemigo
  let vidaEnemigo = parseInt(
    document.getElementById("vidaEnemigo").textContent
  );
  // Texto en caso de lo que vaya a pasar
  let texto = "";
  // guardaremos el historico
  let arrHistorico = JSON.parse(getData("historico")) ?? [];
  // Si falla, añadimos el texto
  if (random > probabilidad) {
    texto = "Fallaste" + "\n";
    textArea.value += texto;
  } else {
    // Sino, se quita vida al enemigo
    vidaEnemigo = vidaEnemigo - ataque;
    document.getElementById("vidaEnemigo").textContent = vidaEnemigo;
    texto = "Hiciste " + ataque + " de daño" + "\n";
    textArea.value += texto;
  }
  // y lo guardamos
  arrHistorico.push(texto);
  saveData("historico", JSON.stringify(arrHistorico));
  // Si la vida del enemigo es negativa, lo cambiaremos y resetearemos la vida
  if (vidaEnemigo <= 0) {
    //Sumamos enemigo eliminado
    cont++;
    // Si no hemos matado a 3 enemigos, generaremos otro enemigo
    if (cont <= 2) {
      generarEnemigo();
    } else {
      // De lo contrario, habremos acabado el juego
      saveData("fin", true);
      window.location.href = "finalJuego.html";
    }
  } else {
    // Si no muere, el enemigo ataca
    enemigoAlAtaque();
  }
}

function generarEnemigo() {
  let img = document.getElementById(valImagen);
  img.removeAttribute("id");
  img.removeAttribute("src");
  valImagen++;
  if (valImagen > 2) {
    valImagen = 0;
    img.setAttribute("id", 0);
  } else {
    img.setAttribute("id", valImagen);
  }
  img.setAttribute("src", "imgs/enemy_" + valImagen + ".webp");
  //Vida enemigo
  let vidaEnemigo = Math.round(Math.random() * (20 - 5) + 5);
  document.getElementById("vidaEnemigo").textContent = vidaEnemigo;
}

function enemigoAlAtaque() {
  let vidaPersonaje = parseInt(
    document.getElementById("vidaPersonaje").textContent
  );
  let eAtaca = ataqueEnemigo();
  vidaPersonaje = vidaPersonaje - eAtaca;
  document.getElementById("vidaPersonaje").textContent = vidaPersonaje;
  let textArea = document.getElementById("area");
  let texto = "El enemigo te hizo " + eAtaca + " de daño" + "\n";
  textArea.value += texto;
  let arrHistorico = JSON.parse(getData("historico")) ?? [];
  arrHistorico.push(texto);
  saveData("historico", JSON.stringify(arrHistorico));
  if (vidaPersonaje <= 0) {
    saveData("fin", false);
    window.location.href = "finalJuego.html";
  }
}

// Ataque del enemigo
function ataqueEnemigo() {
  let fuerzaEnemigo = Math.round(Math.random() * (5 - 1) + 1);
  return fuerzaEnemigo;
}

// ataqueLight
function ataqueLight() {
  let personaje = JSON.parse(getData("arrayData"));
  let fuerza = parseInt(personaje[0]["fuerza"]);
  let suerte = parseInt(personaje[0]["suerte"]);
  // Fuerza enemigo, entre 1 y 5
  let ataque = 1 + Math.trunc(fuerza / 3);
  let probabilidad = 90 + suerte;
  huboSuerte(ataque, probabilidad);
}

// ataqueMedium
function ataqueMedium() {
  let personaje = JSON.parse(getData("arrayData"));
  let fuerza = parseInt(personaje[0]["fuerza"]);
  let suerte = parseInt(personaje[0]["suerte"]);
  // Fuerza enemigo, entre 1 y 5
  let ataque = 3 + Math.trunc(fuerza / 2);
  let probabilidad = 70 + suerte;
  huboSuerte(ataque, probabilidad);
}

// ataqueHeavy
function ataqueHeavy() {
  let personaje = JSON.parse(getData("arrayData"));
  let fuerza = parseInt(personaje[0]["fuerza"]);
  let suerte = parseInt(personaje[0]["suerte"]);
  // Fuerza enemigo, entre 1 y 5
  let ataque = 5 + fuerza;
  let probabilidad = 50 + suerte;
  huboSuerte(ataque, probabilidad);
}
// Creacion historico
function crearHistorico() {
  let juego = document.getElementById("juego");
  let historico = document.createElement("textArea");
  historico.setAttribute("id", "area");
  let his = JSON.parse(getData("historico")) ?? [];

  historico.textContent = his;
  juego.appendChild(historico);
}
// Vida del personaje
function vidaPersonaje() {
  let personaje = JSON.parse(getData("arrayData"));
  let vidaP = parseInt(personaje[0]["vida"]);
  let juego = document.getElementById("juego");
  // Elemento personaje
  let elementoP = document.createElement("p");
  // Vida personaje, entre 5 y 20
  let vidaPersonaje = 30 + vidaP * 2;
  let textoPersonaje = document.createTextNode("Tu vida: ");
  let span = document.createElement("span");
  span.textContent = vidaPersonaje;
  span.setAttribute("id", "vidaPersonaje");
  // Creacion texto completo enemigo
  elementoP.appendChild(textoPersonaje);
  elementoP.appendChild(span);

  // Añadimos los elementos al html padre
  juego.appendChild(elementoP);
}

// Creamos al enemigo
function creacionEnemigo() {
  let juego = document.getElementById("juego");
  // Texto enemigo
  let elementoP = document.createElement("p");
  // Vida enemigo, entre 5 y 20
  let vidaEnemigo = Math.round(Math.random() * (20 - 5) + 5);
  let textoEnemigo = document.createTextNode("Vida enemigo: ");
  let span = document.createElement("span");
  span.textContent = vidaEnemigo;
  span.setAttribute("id", "vidaEnemigo");
  // Creacion texto completo enemigo
  elementoP.appendChild(textoEnemigo);
  elementoP.appendChild(span);

  // Añadimos los elementos al html padre
  juego.appendChild(elementoP);
}
// Creamos la imagen del enemigo
function creacionImagen() {
  let juego = document.getElementById("juego");
  let enemigoImg = Math.round(Math.random() * 2);
  let img = document.createElement("img");
  img.setAttribute("id", enemigoImg);
  // Guardo el valor;
  valImagen = enemigoImg;
  img.setAttribute("src", "imgs/enemy_" + enemigoImg + ".webp");
  juego.appendChild(img);
}
// Creamos los botones de ataque
function crearBotones() {
  let juego = document.getElementById("juego");
  let lightAttack = document.createElement("input");
  lightAttack.setAttribute("value", "Light Attack");
  lightAttack.setAttribute("id", "lightAttack");
  lightAttack.setAttribute("type", "button");
  let normalAttack = document.createElement("input");
  normalAttack.setAttribute("value", "Normal Attack");
  normalAttack.setAttribute("id", "normalAttack");
  normalAttack.setAttribute("type", "button");
  let heavyAttack = document.createElement("input");
  heavyAttack.setAttribute("value", "Heavy Attack");
  heavyAttack.setAttribute("id", "heavyAttack");
  heavyAttack.setAttribute("type", "button");
  let div = document.createElement("div");
  div.setAttribute("id", "botonesAtaque");
  div.appendChild(lightAttack);
  div.appendChild(normalAttack);
  div.appendChild(heavyAttack);
  juego.appendChild(div);
}
