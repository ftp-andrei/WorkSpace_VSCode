"use strict";

const datosPiramide = JSON.parse(localStorage.getItem("datosPiramide"));

document.addEventListener("DOMContentLoaded", () => {
  const imagen = document.querySelector(".iconoHome");

  imagen.addEventListener("click", () => {
    volverHome();
  });

  crearPiramide();

  const cuadrados = document.querySelectorAll("#cuadrado");
  efectoCaidaCuadrado(cuadrados);
  animacionMostrarCuadrado(cuadrados);
});

function volverHome() {
  window.location.href = "home.html";
}

function crearPiramide() {
  const main = document.querySelector(".main");
  const tamaño = parseInt(datosPiramide.tamaño);
  const anchoBorde = parseInt(datosPiramide.anchoBorde);
  const background = datosPiramide.background;

  insertarFilas(main, tamaño, anchoBorde, background);

  ajustarResponsividadPiramide(tamaño);
}

function insertarFilas(main, tamaño, anchoBorde, background) {
  for (let i = 1; i <= tamaño; i++) {
    const fila = document.createElement("div");
    fila.setAttribute("id", "fila");
    insertarCuadrados(i, fila, anchoBorde, background);
    main.append(fila);
  }
}

function insertarCuadrados(cantidad, fila, anchoBorde, background) {
  for (let i = 1; i <= cantidad; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.setAttribute("id", "cuadrado");
    fila.append(cuadrado);
    cuadrado.style.border = `${anchoBorde}px solid rgb(2, 2, 2)`;
    cuadrado.style.background = `linear-gradient(to right, ${background} , yellow)`;
  }
}

function animacionMostrarCuadrado(cuadrados) {
  [...cuadrados].reverse().forEach((e, i) => {
    fadeIn(e, i * 100);

    function fadeIn(item, delay) {
      setTimeout(() => {
        item.classList.add("fadein");
        item.style.transform = "rotate(360deg)";
      }, delay);
    }
  });
}

function efectoCaidaCuadrado(cuadrados) {
  [...cuadrados].forEach((e) => {
    e.addEventListener("click", (event) => {
      let cuadradoClicado = event.target;
      cuadradoClicado.style.background = "white";
      cuadradoClicado.style.transform = "translateY(900px)";
    });
  });
}

function ajustarResponsividadPiramide(tamaño) {
  const cuadrados = document.querySelectorAll("#cuadrado");
  const filas = document.querySelectorAll("#fila");

  if (tamaño <= 8) {
    ajustarFilasPiramide(filas, "S");
    ajustarCuadradosPiramide(cuadrados, "S");
  } else if (tamaño > 8 && tamaño < 15) {
    ajustarFilasPiramide(filas, "M");
    ajustarCuadradosPiramide(cuadrados, "M");
  } else if (tamaño >= 15 && tamaño <= 20) {
    ajustarFilasPiramide(filas, "XL");
    ajustarCuadradosPiramide(cuadrados, "XL");
  }
}

function ajustarFilasPiramide(filas, tamañoPiramide) {
  filas.forEach((e) => {
    e.classList.toggle(`filaPira${tamañoPiramide}`);
  });
}
function ajustarCuadradosPiramide(cuadrados, tamañoPiramide) {
  cuadrados.forEach((e) => {
    e.classList.toggle(`cuadradoPira${tamañoPiramide}`);
  });
}
