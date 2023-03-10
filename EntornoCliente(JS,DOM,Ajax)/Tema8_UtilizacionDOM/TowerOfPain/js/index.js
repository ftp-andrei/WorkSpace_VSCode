"use strict";
import {
  soloNumeros,
  camposVacios,
  validarTamano,
  validarBackground,
} from "./validator.js";
import { storeData } from "./arrays.js";

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

  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      salvarDatos();
    });
});

function salvarDatos() {
  let tamano = document.getElementById("tamano").value;
  let anchoBorde = document.getElementById("anchoBorde").value;
  let backgroundColor = document.getElementById("backgroundColor").value;
  //Comprobamos campos vacios o invalidos
  if (comprobarCampos(tamano, anchoBorde, backgroundColor)) {
    storeData(tamano, anchoBorde, backgroundColor);
    window.location.href = "torre.html";
  } else {
    error.textContent = "Error en los campos, revise los datos introducidos";
  }
}
// Comprobamos que no haya errores en los campos
function comprobarCampos(tamano, anchoBorde, backgroundColor) {
  if (
    camposVacios(tamano) &&
    camposVacios(anchoBorde) &&
    camposVacios(backgroundColor) &&
    validarTamano(tamano) &&
    validarTamano(anchoBorde) &&
    validarBackground(backgroundColor)
  ) {
    return true;
  }
  return false;
}
