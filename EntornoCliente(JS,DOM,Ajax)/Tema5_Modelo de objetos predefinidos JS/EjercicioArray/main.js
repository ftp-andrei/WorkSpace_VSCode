"use strict";

function alerta() {
  let numero = parseInt(document.getElementById("numeroInsertado").value);
  alert(
    "El resultado de " +
      numero +
      " con las posibles combinaciones es: " +
      posibilidades(numero)
  );
}

function posibilidades(numero) {}

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
