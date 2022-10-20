"use strict";
function alerta() {
  let cadena = document.getElementById("cifrado1").value.toLowerCase();
  let numero = parseInt(document.getElementById("numero").value);
  encriptar(cadena, numero);
}

function encriptar(cadena, numero) {
  let abecedario = new Array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  );

  if (numero > 0) {
    let cadenaNueva = "";
    for (let i = 0; i < cadena.length; i++) {
      cadenaNueva =
        cadenaNueva +
        abecedario[
          (abecedario.indexOf(cadena.charAt(i)) + numero) % abecedario.length
        ];
    }
    return (document.getElementById("cifrado2").value = cadenaNueva);
  } else {
    return (document.getElementById("cifrado2").value = cadena);
  }
}
