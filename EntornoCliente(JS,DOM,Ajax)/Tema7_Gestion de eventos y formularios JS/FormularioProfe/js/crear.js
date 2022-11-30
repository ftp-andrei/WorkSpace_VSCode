"use strict";
import { storeData } from "./main.js";
import {
  checkIfElementValueIsEmpty,
  checkPassword,
  checkIsOlderThanEighteen,
  checkIfIsCorrectIban,
  soloNumeros,
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("idForm")
    .addEventListener("submit", function (event) {
      checkAndSaveData(event);
    });

  document
    .getElementById("iTelefono")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });
});

function checkAndSaveData(event) {
  let contador = 0;
  let message = "";
  const nombre = document.getElementById("iNombre").value;
  const apellido = document.getElementById("iApellido").value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nacimiento = document.getElementById("iNacimiento").value;
  const telefono = document.getElementById("iTelefono").value;
  const pass = document.getElementById("iPass").value;
  const iban =
    document.getElementById("ccc1").value +
    document.getElementById("ccc2").value +
    document.getElementById("ccc3").value +
    document.getElementById("ccc4").value;
  message = checkName(nombre);
  setErrorMessage(event, message, contador);
  message = checkApellido(apellido);
  contador++;
  setErrorMessage(event, message, contador);
  message = checkTelefono(telefono);
  contador++;
  setErrorMessage(event, message, contador);
  message = checkNacimiento(nacimiento, message);
  contador++;
  setErrorMessage(event, message, contador);
  message = checkIfIsCorrectIban(iban);
  contador++;
  setErrorMessage(event, message, contador);
  message = checkPassword(pass);
  contador++;
  setErrorMessage(event, message, contador);

  if (message === "") {
    storeData(nombre, apellido, nacimiento, genero, iban, telefono, pass);
  }
}
function setErrorMessage(event, message, contador) {
  const error = document.getElementsByClassName("error")[contador];
  if (message !== "") {
    event.preventDefault();
    error.className = "error active";
    error.innerHTML = message;
    return;
  }

  error.className = "error";
  error.textContent = "";
}

function checkName(nombre) {
  return checkIfElementValueIsEmpty(nombre, "Nombre");
}

function checkApellido(apellido) {
  return checkIfElementValueIsEmpty(apellido, "Apellido");
}

function checkNacimiento(nacimiento, message) {
  message = checkIfElementValueIsEmpty(nacimiento, "Nacimiento");
  message += checkIsOlderThanEighteen(nacimiento);
  return message;
}

function checkTelefono(telefono) {
  return checkIfElementValueIsEmpty(telefono, "Telefono");
}
