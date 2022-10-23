"use strict";
function alerta() {
  let numero = document.getElementById("searchInput").value;
  alert("Persistencia de "+numero+": " + persistenciaMultiplicativa(numero));
}

function persistenciaMultiplicativa(numero) {
  if (numero >= 10) {
    let contador = 0;
    let numeroAux = 1;
    let numeroSeparado = separarNumero(numero);
    for (let i = numeroSeparado.length; i>0;i--) {
      for(let j=0;j<numeroSeparado.length;j++){
        numeroAux=numeroAux*numeroSeparado[j];
      }
      numeroSeparado = separarNumero(numeroAux);
      i=numeroSeparado.length;
      numeroAux = 1;
      contador++;
    }
    return contador;
  } else {
    return 0;
  }
}
function separarNumero(numero) {
  let numeroArray = [];
  numero = numero.toString();
  for (let i = 0; i < numero.length; i++) {
    numeroArray[i] = numero.charAt(i);
  }
  return numeroArray;
}
