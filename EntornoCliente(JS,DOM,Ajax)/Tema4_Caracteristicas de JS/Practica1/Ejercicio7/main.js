"use strict";
function alerta() {
  let numero = document.getElementById("searchInput").value;
  alert("El indice N de " + numero + " es: " + indiceN(numero));
}

function indiceN(numero) {
  numero = numero.split(",");
  let sumaIzq = 0;
  let sumaDer = 0;
  for (let i = 0; i < numero.length; i++) {
    if (i != 0) {
      sumaIzq = sumaIzq + parseInt(numero[i - 1]);
    }
    for (let j = i + 1; j < numero.length; j++) {
      sumaDer = sumaDer + parseInt(numero[j]);
    }
    if (sumaIzq == sumaDer) {
      return i;
    }
    sumaDer = 0;
  }
  return -1;
}
