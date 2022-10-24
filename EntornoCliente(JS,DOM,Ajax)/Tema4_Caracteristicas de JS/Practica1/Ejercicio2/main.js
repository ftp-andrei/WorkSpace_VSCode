"use strict";
function alerta() {
  let num = document.getElementById("searchInput").value;
  alert(numPin(num));
}

function numPin(num) {
  if (num.length === 4 || num.length === 6) return true;
  else {
    return false;
  }
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
