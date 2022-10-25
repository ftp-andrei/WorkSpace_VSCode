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
    for (let i = 0; i < cadena.length - 1; i++) {
      if (cadena[i] == cadena[i + 1]) {
        arrCadena[i] = cadena[i];
      } else if (arrBG.includes(cadena[i]) && arrBG.includes(cadena[i + 1])) {
        arrCadena[i] = "R";
      } else if (arrRG.includes(cadena[i]) && arrRG.includes(cadena[i + 1])) {
        arrCadena[i] = "B";
      } else {
        arrCadena[i] = "G";
      }
    }
    cadena = arrCadena;
  }

  return cadena;
}
