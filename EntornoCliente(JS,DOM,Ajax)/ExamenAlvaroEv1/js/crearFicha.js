"use strict"
import { storeData } from "./main.js";
import {
    checkIfElementValueIsEmpty,
    checkIfStatsSumTen,
    checkAlineamientoOK,
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('idForm').addEventListener("submit", function (event) {
        checkAndSaveData(event);
    })
});

function checkAndSaveData(event) {
    /* Recoger todos los datos de los input */
    const nombre = document.getElementById('iNombre').value;
    const raza = document.getElementById('raza').value;
    const alineamiento = document.querySelector('input[name="alineamiento"]:checked').value;
    const fuerza = document.getElementById('fuerza').value;
    const vida = document.getElementById('vida').value;
    const suerte = document.getElementById('suerte').value;

    /* Ver si los campos tienen errores */
    const errName = checkNombre(nombre);
    const errAlineamiento = checkAlineamiento(raza, alineamiento);
    const errStats = checkStats(fuerza,vida,suerte);

    /* Sacar los mensajes de error */
    // setErrorMessage(evento para que no haga submit, el error, 'id del error');
    setErrorMessage(event, errName, 'nombreError');
    setErrorMessage(event, errAlineamiento, 'alineamientoError');
    setErrorMessage(event, errStats, 'statsError');

    if (errName === "" && errAlineamiento === "" && errStats === "") {
        storeData(nombre, raza, alineamiento, fuerza, 30+vida*2, suerte);
    }
}

function setErrorMessage(event, message, id) {
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
    return checkIfElementValueIsEmpty(nombre, 'nombre');
}

function checkAlineamiento(raza, alineamiento) {
    return checkAlineamientoOK(raza, alineamiento);
}

function checkStats(fuerza,vida,suerte) {
    return checkIfStatsSumTen(fuerza,vida,suerte);
}