//Lo que sea del fichaPersonaje.html
"use strict";
import { storeData } from "./main.js";
import { checkIfElementValueIsEmpty } from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("idForm")
    .addEventListener("button", function (event) {
      checkAndSaveData(event);
    });

  document
    .getElementById("fuerzaBotones")
    // TODO: sumar/restar fuerza
    .addEventListener("click", function (event) {
      fuerza(event);
    });

  document
    // TODO: sumar/restar vida
    .getElementById("vidaBotones")
    .addEventListener("click", function (event) {
      vida(event);
    });

  document
    // TODO: sumar/restar suerte
    .getElementById("suerteBotones")
    .addEventListener("click", function (event) {
      suerte(event);
    });
});

function checkAndSaveData(event) {
  let message = "";
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  const caracter = document.querySelector(
    'input[name="caracter"]:checked'
  ).value;
  const fuerza = document.getElementById("fuerza").value;
  const vida = document.getElementById("vida").value;
  const suerte = document.getElementById("suerte").value;
  // TODO: Mostrar validacion errores
  message = checkName(nombre);
  setErrorMessage(event, message);
  // TODO: Dependiendo del dropdown caracter (Good,neutral,evil) que se modifique solo

  if (message === "") {
    storeData(nombre, raza, caracter, fuerza, vida, suerte);
  }
}

function setErrorMessage(event, message) {
  const error = document.getElementsByClassName("error");
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
  return checkIfElementValueIsEmpty(nombre, "nombre");
}

function fuerza() {
  let fuerzaMas = getElementById("fuerza+");
  let valor = document.getElementById("campoFuerza").value;
  fuerzaMas.addEventListener("click", function () {
    valor++;
  });
  let fuerzaMenos = getElementById("fuerza-");
  fuerzaMenos.addEventListener("click", function () {
    valor--;
  });
}

function vida() {
  let vidaMas = getElementById("vida+");
  let valor = document.getElementById("campoVida").value;
  vidaMas.addEventListener("click", function () {
    valor++;
  });
  let vidaMenos = getElementById("vida-");
  vidaMenos.addEventListener("click", function () {
    valor--;
  });
}

function suerte() {
  let suerteMas = getElementById("suerte+");
  let valor = document.getElementById("campoSuerte").value;
  suerteMas.addEventListener("click", function () {
    valor++;
  });
  let suerteMenos = getElementById("suerte-");
  suerteMenos.addEventListener("click", function () {
    valor--;
  });
}
