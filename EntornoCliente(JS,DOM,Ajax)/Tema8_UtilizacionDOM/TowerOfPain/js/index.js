"use strict";
import { soloNumeros } from "./validator.js";
import { storeData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tamano")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });

  document.getElementById("submitButon").addEventListener("click", function () {
    salvarDatos();
  });
});

function salvarDatos() {
  let tamano = document.getElementById("tamano");
  let anchoBorde = document.getElementById("anchoBorde");
  let backgroundColor = document.getElementById("backgroundColor");

  storeData(tamano, anchoBorde, backgroundColor);
}
