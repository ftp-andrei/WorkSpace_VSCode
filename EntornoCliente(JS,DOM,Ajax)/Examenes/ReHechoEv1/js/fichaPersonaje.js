"use strict";
import { storeData } from "./arrays.js";
import {
  checkIfElementValueIsEmpty,
  checkIfElementValueIsZero,
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  // Al cargar la pagina pone valores aleatorios a los stats
  // document.body.onload = function () {
  randomValues();
  // };

  //ATT FUERZA
  document
    .getElementById("+fuerza")
    .addEventListener("click", function (event) {
      //Parseamos el contenido de puntos a integer
      let puntos = parseInt(document.getElementById("puntos").textContent);
      // Cogemos el valor de fuerza (int)
      if (puntos !== 0) {
        document.getElementById("fuerza").value++;
        document.getElementById("puntos").textContent = puntos - 1;
      }
    });
  document
    .getElementById("-fuerza")
    .addEventListener("click", function (event) {
      //Parseamos el contenido de puntos a integer
      let puntos = parseInt(document.getElementById("puntos").textContent);
      // Cogemos el valor de fuerza (int)
      if (document.getElementById("fuerza").value != 0) {
        document.getElementById("fuerza").value--;
        document.getElementById("puntos").textContent = puntos + 1;
      }
    });

  //ATT VIDA
  document.getElementById("+vida").addEventListener("click", function (event) {
    //Parseamos el contenido de puntos a integer
    let puntos = parseInt(document.getElementById("puntos").textContent);
    // Cogemos el valor de fuerza (int)
    if (puntos !== 0) {
      document.getElementById("vida").value++;
      document.getElementById("puntos").textContent = puntos - 1;
    }
  });
  document.getElementById("-vida").addEventListener("click", function (event) {
    //Parseamos el contenido de puntos a integer
    let puntos = parseInt(document.getElementById("puntos").textContent);
    // Cogemos el valor de fuerza (int)
    if (document.getElementById("vida").value != 0) {
      document.getElementById("vida").value--;
      document.getElementById("puntos").textContent = puntos + 1;
    }
  });

  //ATT SUERTE

  document
    .getElementById("+suerte")
    .addEventListener("click", function (event) {
      //Parseamos el contenido de puntos a integer
      let puntos = parseInt(document.getElementById("puntos").textContent);
      // Cogemos el valor de fuerza (int)
      if (puntos !== 0) {
        document.getElementById("suerte").value++;
        document.getElementById("puntos").textContent = puntos - 1;
      }
    });
  document
    .getElementById("-suerte")
    .addEventListener("click", function (event) {
      //Parseamos el contenido de puntos a integer
      let puntos = parseInt(document.getElementById("puntos").textContent);
      // Cogemos el valor de fuerza (int)
      if (document.getElementById("suerte").value != 0) {
        document.getElementById("suerte").value--;
        document.getElementById("puntos").textContent = puntos + 1;
      }
    });

  // Si el select cambia que haga el razaChange
  document.getElementById("raza").addEventListener("change", function (event) {
    razaChange();
    caracterChange();
  });
  document
    .getElementById("siguiente")
    .addEventListener("click", function (event) {
      checkAndSaveData(event);
    });
});
// Cambiar disables al cambiar raza
function razaChange() {
  let raza = document.getElementById("raza").value;
  if (raza === "orco") {
    document.getElementById("G").disabled = true;
    document.getElementById("N").disabled = false;
    document.getElementById("E").disabled = false;
  }
  if (raza === "elfo") {
    document.getElementById("G").disabled = false;
    document.getElementById("N").disabled = false;
    document.getElementById("E").disabled = true;
  }
  if (raza === "humano") {
    document.getElementById("G").disabled = false;
    document.getElementById("N").disabled = true;
    document.getElementById("E").disabled = false;
  }
  if (raza === "enano") {
    document.getElementById("G").disabled = false;
    document.getElementById("N").disabled = false;
    document.getElementById("E").disabled = false;
  }
}
// Cambiar caracter (checked) al elegir el dropdown
function caracterChange() {
  let raza = document.getElementById("raza").value;
  // Cambiar el checked
  if (raza != "humano") {
    document.getElementById("N").checked = true;
  } else {
    document.getElementById("G").checked = true;
  }
}
// Valores aleatorios form
function randomValues() {
  let random = Math.floor(Math.random() * 11);
  document.getElementById("puntos").textContent += 10 - random;
  document.getElementById("puntos").value =
    document.getElementById("puntos").textContent;
  let fuerza = Math.floor(Math.random() * random);
  random = random - fuerza;
  let vida = Math.floor(Math.random() * random);
  let suerte = random - vida;

  document.getElementById("fuerza").value = fuerza;
  document.getElementById("suerte").value = suerte;
  document.getElementById("vida").value = vida;
}

function checkAndSaveData(event) {
  // Recogemos datos del input
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  const caracter = document.querySelector(
    'input[name="caracter"]:checked'
  ).value;
  const puntos = document.getElementById("puntos").textContent;
  const fuerza = document.getElementById("fuerza").value;
  const vida = document.getElementById("vida").value;
  const suerte = document.getElementById("suerte").value;

  // Ver campos con errores
  const errName = checkNombre(nombre);
  const errPuntos = checkPuntos(puntos);

  // Muestra errores
  setErrorMessage(event, errName, "errorNombre");
  setErrorMessage(event, errPuntos, "errorPuntos");

  if (errName === "" && errPuntos === "") {
    storeData(nombre, raza, caracter, fuerza, vida, suerte);
  }
}
// Configurar mensaje de error en caso de que aparezca
function setErrorMessage(event, message, id) {
  // const error = document.getElementsByClassName("error");
  const error = document.getElementById(id);
  if (message !== "") {
    event.preventDefault();
    error.className = "error active";
    error.innerHTML = message;
    return;
  }

  error.className = "error";
  error.textContent = "";
}

function checkNombre(nombre) {
  return checkIfElementValueIsEmpty(nombre, "nombre");
}

function checkPuntos(puntos) {
  return checkIfElementValueIsZero(puntos, "puntos");
}
