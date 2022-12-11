"use strict";
import { getArrayData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearPiramide();
});

function crearPiramide() {
  let array = getArrayData();
  let tamano = array.tamano;
  let anchoBorde = array.anchoBorde;
  let backgroundColor = array.backgroundColor;

  alert(tamano);
}
