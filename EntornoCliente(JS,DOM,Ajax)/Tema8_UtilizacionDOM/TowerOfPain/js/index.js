"use strict";
import { soloNumeros } from "./validator.js";
import { storeData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tamano")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });

  document
    .getElementById("anchoBorde")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });

  document.getElementById("submitButon").addEventListener("click", function () {
    salvarDatos();
  });
});

function salvarDatos() {
  let tamano = document.getElementById("tamano").value;
  let anchoBorde = document.getElementById("anchoBorde").value;
  let backgroundColor = document.getElementById("backgroundColor").value;

  storeData(tamano, anchoBorde, backgroundColor);
}
