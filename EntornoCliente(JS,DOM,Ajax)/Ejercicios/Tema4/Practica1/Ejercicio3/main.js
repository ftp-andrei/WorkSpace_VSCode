"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value.split(",");
  alert(menosRepeticiones(cadena));
}

function menosRepeticiones(cadena) {
  let suma = 10000;
  let sumaAux = 0;
  let num;
  for (let i = 0; i < cadena.length; i++) {
    for (let j = 0; j < cadena.length; j++) {
      if (cadena[i] === cadena[j]) {
        sumaAux++;
      }
    }
    if (sumaAux < suma) {
      num = cadena[i];
      suma = sumaAux;
    } else {
      if (sumaAux === suma) {
        if (cadena[i] < num) {
          num = cadena[i];
        }
      }
    }
    sumaAux = 0;
  }

  return (
    "El numero menos repetido es: " +
    num +
    " y se a repetido " +
    suma +
    " veces"
  );
}
