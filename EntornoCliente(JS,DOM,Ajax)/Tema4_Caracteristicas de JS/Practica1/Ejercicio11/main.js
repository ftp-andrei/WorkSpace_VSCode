"use strict";
function numNatural() {
  let numero = parseInt(document.getElementById("numNatural").value);
  alert("El numero " + numero + " se divide en: " + calculoNumNatural(numero));
}

function calculoNumNatural(numero) {
  let arrNum = [];
  let contador = 0;

  for (let i = 0; i < 4; i++) {
    numero = numero.toString(2);
    for (let j = 0; j < numero.length; j++) {
      if (numero.charAt(j) == 1) {
        contador++;
      }
    }
    arrNum[i] = contador;
    numero = parseInt(numero, 2);
    numero = numero - contador * contador;
    contador = 0;
  }
  return arrNum;
}

function soloNumeros(num) {
  var code = num ? num.which : num.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (code >= 48 && code <= 57) {
    // is a number.
    return true;
  } else {
    // other keys.
    return false;
  }
}

// Poner numero en binario y de ahi sacar las potencias
/*
5^2 = 25

31-25 = 6

2^2 = 4

6-4=2

1^2 = 1

2-1=1;

1^2 = 1

1-1=0; */
