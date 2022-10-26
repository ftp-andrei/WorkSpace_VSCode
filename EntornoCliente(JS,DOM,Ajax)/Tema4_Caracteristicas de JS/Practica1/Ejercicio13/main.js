"use strict";
function formarTriangulo() {
  let cadena = document
    .getElementById("searchInput")
    .value.toUpperCase()
    .split("");
  alert(triangulo(cadena));
}

function triangulo(cadena) {
  let arrBG = ["B", "G"];
  let arrRG = ["R", "G"];
  for (let contador = cadena.length; contador > 1; contador--) {
    for (let i = 0; i < cadena.length - 1; i++) {
      if (cadena[i] == cadena[i + 1]) {
        cadena[i] = cadena[i];
      } else if (arrBG.includes(cadena[i]) && arrBG.includes(cadena[i + 1])) {
        cadena[i] = "R";
      } else if (arrRG.includes(cadena[i]) && arrRG.includes(cadena[i + 1])) {
        cadena[i] = "B";
      } else {
        cadena[i] = "G";
      }
    }
    cadena.pop();
  }

  return cadena;
}
