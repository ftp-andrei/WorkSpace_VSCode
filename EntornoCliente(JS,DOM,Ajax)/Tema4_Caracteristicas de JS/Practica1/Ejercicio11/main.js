"use strict";
function numNatural() {
  let numero = parseInt(document.getElementById("numNatural").value);
  alert("El numero " + numero + " se divide en: " + calculoNumNatural(numero));
}

function calculoNumNatural(numero) {
  let arrNum = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= numero; j++) {
      if (j * j > numero) {
        arrNum[i] = j - 1;
        numero = numero - (j - 1) * (j - 1);
        break;
      } else if (j * j == numero) {
        arrNum[i] = j;
        numero = numero - j * j;
        break;
      }
    }
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
