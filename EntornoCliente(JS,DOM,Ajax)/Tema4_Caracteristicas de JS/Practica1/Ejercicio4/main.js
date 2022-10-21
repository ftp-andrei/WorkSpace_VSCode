"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value;
  alert("Numeros que aparecen en un numero impar: " + numeroImparVeces(cadena));
}

function numeroImparVeces(cadena) {
  let cadenaArray = cadena.split(",");
  let cadenaArray2 = [];
  let contadorArray = 0;

  cadenaArray.sort(function (a, b) {
    return a - b;
  });
  let contador = 1;

  for (let i = 0; i < cadenaArray.length; i++) {
    if (cadenaArray[i] === cadenaArray[i + 1]) {
      contador++;
    } else {
      if (contador % 2 != 0) {
        cadenaArray2[contadorArray] = cadenaArray[i];
        contadorArray++;
      }
      contador = 1;
    }
  }
  return cadenaArray2;
}
