"use strict";
function alerta() {
  let num = document.getElementById("searchInput").value;
  alert(ordenarNumero(num));
}

function ordenarNumero(num) {
  let numArray = num.split("");
  numArray.sort();
  numArray.reverse();
  let num2 = "";
  numArray.forEach((element) => {
    num2 = num2 + element;
  });
  return num2;
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
