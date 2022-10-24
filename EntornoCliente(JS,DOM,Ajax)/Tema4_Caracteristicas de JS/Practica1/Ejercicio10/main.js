"use strict";
function binario() {
  let numero = parseInt(document.getElementById("binario").value);
  alert("El resultado de "+numero +" con representacion binaria "+numero.toString(2)+" es: "+calculoBinario(numero));
}

function calculoBinario(numero){
  let contador=0;
  numero=numero.toString(2);
  for(let i=0;i<numero.length;i++){
      if(numero.charAt(i)==1){
          contador++;
      }
  }
  return contador;
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
