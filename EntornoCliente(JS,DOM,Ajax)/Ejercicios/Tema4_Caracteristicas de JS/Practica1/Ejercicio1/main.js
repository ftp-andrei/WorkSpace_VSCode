"use strict";
function alerta() {
  let cadena = document.getElementById("searchInput").value.toLowerCase();
  alert(buscaVocales(cadena));
}

function buscaVocales(cadena) {
  const vocales = "aeiou";
  let suma = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.indexOf(cadena[i]) != -1) {
      suma++;
    }
  }
  return suma;
}
