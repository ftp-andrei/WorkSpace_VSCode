import { soloNumeros } from "./validator.js";

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("submit").addEventListener("click", function (event) {
    crearElementos();
  });

  document
    .getElementById("input")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });
});

function crearElementos() {
  const numero = document.getElementById("input").value;
  const divRow = document.createElement("div").classList.add("row");
  const carta = document.createElement("figure").classList.add("frame");

  const flipCarta = document.createElement("div").classList.add("flip-card");

  const flipCartaDelante = document
    .createElement("div")
    .classList.add("flip-card-inner");

  const dorsalCarta = document.createElement("img");
  dorsalCarta.src = "media/card-back.jpg";
  dorsalCarta.alt = "Elige carta";

  const flipCartaDetras = document
    .createElement("div")
    .classList.add("flip-card-front");

  const numeroCarta = document.createElement("img");
  numeroCarta.src = `media/ace_1.jpg`;
  numeroCarta.alt = "Elige carta";

  for (let i = 0; i < numero; i++) {
    if (i == 0 || i == 4 || i == 8) {
      divRow.appendChild(carta);
    }
    cargarElementos(
      carta,
      flipCarta,
      flipCartaDelante,
      flipCartaDetras,
      dorsalCarta,
      numeroCarta
    );
  }
}

function cargarElementos(
  carta,
  flipCarta,
  flipCartaDelante,
  flipCartaDetras,
  dorsalCarta,
  numeroCarta
) {
  carta.appendChild(flipCarta);
  flipCarta.appendChild(flipCartaDelante);
  flipCartaDelante.appendChild(dorsalCarta);
  flipCarta.appendChild(flipCartaDetras);
  flipCartaDetras.appendChild(numeroCarta);
}
