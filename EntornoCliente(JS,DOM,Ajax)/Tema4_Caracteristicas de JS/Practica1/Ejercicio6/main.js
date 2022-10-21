"use strict";
function alerta() {
  let numero = document.getElementById("searchInput").value;
  alert("Cadena sin repetidos: " + persistenciaMultiplicativa(numero));
}

function persistenciaMultiplicativa(numero) {
  if (numero >= 10) {
    let contador = 0;
    let numeroAux = 1;
    let numeroSeparado = separarNumero(numero);
    for (let i = numeroSeparado.length; i > 1; i++) {
      numeroSeparado.forEach((element) => {
        numeroAux = numeroAux * element;
      });
      numeroSeparado = separarNumero(numeroAux);
      numeroAux = 1;
      contador++;
    }
    return contador;
  } else {
    return 1;
  }
}
function separarNumero(numero) {
  let numeroArray = [];
  numero = numero + "";
  for (let i = 0; i < numero.length; i++) {
    numeroArray[i] = numero.charAt(i);
  }
  return numeroArray;
}
