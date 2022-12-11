"use strict";
import { getArrayData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearPiramide();
});

function crearPiramide() {
  let array = getArrayData();

  let tamano = array[0].tamano;
  let anchoBorde = array[0].anchoBorde;
  let backgroundColor = array[0].backgroundColor;

  crearRows(tamano, anchoBorde, backgroundColor);
}

function crearRows(tamano, anchoBorde, backgroundColor) {
  anchoBorde = anchoBorde + "px solid black";
  let cuadrado = document.createElement("textArea");
  let conjuntoCuadrados = document.createElement("div");
  cuadrado.setAttribute("background-color", backgroundColor);
  cuadrado.setAttribute("border", anchoBorde);
  cuadrado.setAttribute("resize", "none");
  let saltoLinea = document.createElement("br");
  let div = document.createElement("div");
  for (let i = 0; i < tamano; i++) {
    for (let contador = 0; contador < i; contador++) {
      conjuntoCuadrados.appendChild(cuadrado);
    }
    saltoLinea.appendChild(conjuntoCuadrados);
    div.appendChild(saltoLinea);
  }
}
