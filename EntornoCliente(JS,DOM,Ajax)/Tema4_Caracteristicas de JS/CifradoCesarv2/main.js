"use strict";
function alerta() {
  let cadena = document.getElementById("cifrado1").value.toLowerCase();
  let numero = parseInt(document.getElementById("numero").value);
  encriptar(cadena, numero);
}

function alerta2() {
  let cadena = document.getElementById("cifrado2").value.toLowerCase();
  desencriptar(cadena);
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

function desencriptar(cadena) {
  let letraFrecuencia = new Array(
    "e",
    "a",
    "o",
    "s",
    "n",
    "r",
    "i",
    "l",
    "d",
    "t",
    "u",
    "c",
    "m",
    "p",
    "b",
    "h",
    "q",
    "y",
    "v",
    "g",
    "ó",
    "í",
    "f",
    "j",
    "z",
    "á",
    "é",
    "ñ",
    "x",
    "ú",
    "k",
    "w",
    "ü"
  );
  let cadenaAux = cadena;
  cadena = cadena.split("");
  cadena.sort(); //error

  for (let i = 0; i < cadena.length; i++) {
    cadenaAux = cadenaAux.replaceAll(
      comprobarArray(cadena),
      letraFrecuencia[letraFrecuencia.indexOf(i)]
    );
  }
  return (document.getElementById("cifrado3").value = cadenaAux);
}

function comprobarArray(cadena) {
  let letra = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == cadena[i + 1]) {
      cadena.slice(0, 1);
      alert(cadena);
    } else {
      letra = cadena[i];
      cadena.slice(0, 1);
      return letra;
    }
  }
}
