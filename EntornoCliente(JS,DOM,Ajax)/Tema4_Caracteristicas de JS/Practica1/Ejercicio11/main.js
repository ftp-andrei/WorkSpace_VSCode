"use strict";
function numNatural() {
  let numero = parseInt(document.getElementById("numNatural").value);
  alert(calculoNumNatural(numero));
}

function calculoNumNatural(numero) {}

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
