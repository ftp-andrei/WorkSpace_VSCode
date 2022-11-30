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

  //Añadir mas validaciones, como Nombre,apellido etc
});

function checkAndSaveData(event) {
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

  message = checkPersonalInformation(
    nombre,
    apellido,
    genero,
    nacimiento,
    telefono,
    message
  );

  message = checkPrivateInformation(iban, pass, message);

  setErrorMessage(event, message);

  if (message === "") {
    storeData(nombre, apellido, nacimiento, genero, iban, telefono, pass);
  }
}
function setErrorMessage(event, message) {
  const error = document.getElementById("error");
  if (message !== "") {
    event.preventDefault();
    error.className = "error active";
    error.innerHTML = message;
    return;
  }

  error.className = "error";
  error.textContent = "";
}
function checkPrivateInformation(iban, pass, message) {
  message += checkIfIsCorrectIban(iban);
  message += checkPassword(pass);
  return message;
}

function checkPersonalInformation(
  nombre,
  apellido,
  nacimiento,
  genero,
  telefono,
  message
) {
  message += checkIfElementValueIsEmpty(nombre, "Nombre");
  message += checkIfElementValueIsEmpty(apellido, "Apellido");
  message += checkIfElementValueIsEmpty(nacimiento, "Nacimiento");
  message += checkIsOlderThanEighteen(nacimiento);
  message += checkIfElementValueIsEmpty(genero, "Genero");
  message += checkIfElementValueIsEmpty(telefono, "Telefono");
  return message;
}
