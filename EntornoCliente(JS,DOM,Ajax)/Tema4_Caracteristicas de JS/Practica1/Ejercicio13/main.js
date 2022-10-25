"use strict";
function formarTriangulo() {
  let cadena = document
    .getElementById("searchInput")
    .value.toUpperCase()
    .split("");
  alert(triangulo(cadena));
}

function triangulo(cadena) {
  let arrCadena = [];
  let arrBG = ["B", "G"];
  let arrRG = ["R", "G"];
  for (let contador = 0; contador < cadena.length; contador++) {
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] == cadena[i + 1]) {
        arrCadena[i] = cadena[i];
      } else if (cadena.indexOf(i, i + 1) == arrBG) {
        arrCadena[i] == "R";
      } else if (cadena.indexOf(i, i + 1) == arrRG) {
        arrCadena[i] == "B";
      } else {
        arrCadena[i] == "G";
      }
    }
    cadena = arrCadena;
  }

  return cadena;
}
