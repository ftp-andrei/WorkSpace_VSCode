"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value;
  alert("El numero que menos se repite es " + menosRepeticiones(cadena));
}

function menosRepeticiones(cadena) {
  let contador = 0;
  let cadenaArray = cadena.split(",");
  cadenaArray.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < cadenaArray.length; i++) {
    for (let j = 1; j < cadenaArray.length; j++) {
      if (cadenaArray[i] === cadenaArray[j]) {
        contador++;
      } else {
        return cadenaArray[i];
      }
    }
  }
}
