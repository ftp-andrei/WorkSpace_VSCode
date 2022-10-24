"use strict";
function alerta() {
  let numero = document.getElementById("searchInput").value;
  alert("El indice N de " + numero + " es: " + indiceN(numero));
}

function indiceN(numero) {
  numero = numero.split(",");
  alert(numero);

  for (let i = 0; i < numero.length() / 2; i++) {}
}
