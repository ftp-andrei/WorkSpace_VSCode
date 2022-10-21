"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value;
  alert("Cadena sin repetidos: " + sinRepetidos(cadena));
}

function sinRepetidos(cadena) {
  cadena = cadena.split(",");
  const sinRepetir = [];
  for (let i = 0; i < cadena.length; i++) {
    if (!sinRepetir.includes(cadena[i])) {
      sinRepetir.push(cadena[i]);
    }
  }
  return sinRepetir;
}
