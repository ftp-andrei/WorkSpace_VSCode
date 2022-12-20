"use strict";
import { ClasePiramide } from "./ClasePiramide.js";
import {
  validarCamposVacíos,
  validarTamaño,
  validarAnchoBorde,
  validarBackground,
} from "./validador.js";

document.addEventListener("DOMContentLoaded", () => {
  const btnEnviarForm = document.querySelector(".btnEnviarForm");
  btnEnviarForm.addEventListener("click", () => {
    mandarDatos();
  });
});

function mandarDatos() {
  const tamaño = document.querySelector("#txtTamaño").value;
  const ancho = document.querySelector("#txtAnchoBorde").value;
  const fondo = document.querySelector("#txtBackgroundColor").value;

  comprobarTodosLosCampos(tamaño, ancho, fondo);

  const camposValidos = compprobarErrores(tamaño, ancho, fondo);

  if (camposValidos === true) {
    let piramide = new ClasePiramide(tamaño, ancho, fondo);

    localStorage.setItem("datosPiramide", JSON.stringify(piramide));
    window.location.href = "piramide.html";
  }
}

function compprobarErrores() {
  let camposSpan = Array.from(document.querySelectorAll("span"));

  let camposValidos = true;

  camposSpan.forEach((e) => {
    if (
      e.textContent === " " ||
      e.textContent === undefined ||
      e.textContent === null ||
      e.textContent.includes("Vacio") ||
      e.textContent.includes("El")
    ) {
      camposValidos = false;
    }
  });

  return camposValidos;
}

function comprobarTodosLosCampos(tamaño, ancho, fondo) {
  let errorTamaño = document.querySelector("#errorTamaño");
  let errorAnchoBorde = document.querySelector("#errorAnchoBorde");
  let errorBackground = document.querySelector("#errorBackground");

  validarCamposVacíos(tamaño)
    ? (errorTamaño.textContent = "Campo Tamaño Vacio")
    : (errorTamaño.textContent = validarTamaño(tamaño));
  validarCamposVacíos(ancho)
    ? (errorAnchoBorde.textContent = "Campo Ancho Vacio")
    : (errorAnchoBorde.textContent = validarAnchoBorde(ancho));
  validarCamposVacíos(fondo)
    ? (errorBackground.textContent = "Campo Background Vacio")
    : (errorBackground.textContent = validarBackground(fondo));
}
