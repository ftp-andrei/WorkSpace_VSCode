"use strict";
function nonograma() {
  let columna = parseInt(document.getElementById("columna").value);
  let fila = parseInt(document.getElementById("fila").value);
  alert(cargarNonograma(columna, fila));
}

function cargarNonograma() {
  let columna = [(1, 1, 0), (4, 0, 0), (1, 1, 1), (3, 0, 0), (1, 0, 0)];
  let fila = [(1, 0), (2, 0), (3, 0), (1, 2), (4, 0)];
  let resultado = [];

  return resultado;
}
