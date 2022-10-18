"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value.toLowerCase();
  alert(buscaVocales(cadena));
}

function buscaVocales(cadena) {
  let suma = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i).value("aeiou")) {
      suma++;
    }
  }
  return suma;
}
