"use strict";
import { getArrayData } from "./arrays.js";

document.addEventListener("DOMContentLoaded", function () {
  crearPiramide();

  const cuadrado = document.querySelectorAll("#cuadrado");
  teVaCae(cuadrado);
  mostrarCuadrado(cuadrado);
});

function crearPiramide() {
  const datosPiramide = getArrayData();
  const tamano = datosPiramide[0].tamano;
  const anchoBorde = datosPiramide[0].anchoBorde;
  const background = datosPiramide[0].backgroundColor;

  const main = document.getElementById("piramide");
  insertarFilas(main, tamano, anchoBorde, background);
  ajustePiramide(tamano);
}
// Insertamos las filas
function insertarFilas(main, tamano, anchoBorde, background) {
  for (let i = 1; i <= tamano; i++) {
    const fila = document.createElement("div");
    fila.setAttribute("id", "fila");
    insertarCuadrados(i, fila, anchoBorde, background);
    main.appendChild(fila);
  }
}
// Insertamos los cuadrados en cada fila
function insertarCuadrados(cantidad, fila, anchoBorde, background) {
  for (let i = 1; i <= cantidad; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.setAttribute("id", "cuadrado");
    fila.appendChild(cuadrado);
    cuadrado.style.border = `${anchoBorde}px solid`;
    cuadrado.style.background = `${background}`;
  }
}
// Animacion al mostrar el cuadrado
function mostrarCuadrado(cuadrado) {
  cuadrado.forEach((e, i) => {
    aparecenCuadrados(e, i * 40);
    function aparecenCuadrados(cuadrado, tiempo) {
      setTimeout(() => {
        cuadrado.classList.add("aparecenCuadrados");
      }, tiempo);
    }
  });
}
// Animacion efecto caida
function teVaCae(cuadrado) {
  cuadrado.forEach((e) => {
    e.addEventListener("click", (event) => {
      let clickCuadrado = event.target;
      clickCuadrado.style.transform = "translateY(1200px)";
      clickCuadrado.style.background = "white";
    });
  });
}

function ajustePiramide(tamano) {
  const cuadrados = document.querySelectorAll("#cuadrado");
  const filas = document.querySelectorAll("#fila");

  if (tamano <= 8) {
    ajustarFilasPiramide(filas, "Peque");
    ajustarCuadradosPiramide(cuadrados, "Peque");
  }
  if (tamano > 8 && tamano < 15) {
    ajustarFilasPiramide(filas, "Standard");
    ajustarCuadradosPiramide(cuadrados, "Standard");
  }
  if (tamano >= 15 && tamano <= 20) {
    ajustarFilasPiramide(filas, "Grande");
    ajustarCuadradosPiramide(cuadrados, "Grande");
  }
}

function ajustarFilasPiramide(filas, tamanoCuadrado) {
  filas.forEach((e) => {
    e.classList.toggle(`fila${tamanoCuadrado}`);
  });
}

function ajustarCuadradosPiramide(cuadrados, tamanoCuadrado) {
  cuadrados.forEach((e) => {
    e.classList.toggle(`cuadrado${tamanoCuadrado}`);
  });
}
