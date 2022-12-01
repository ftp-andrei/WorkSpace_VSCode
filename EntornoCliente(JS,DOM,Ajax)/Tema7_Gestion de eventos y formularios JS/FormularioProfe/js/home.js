"use strict";
import { getArrayData, cifrar } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearRowsTabla();
});

function crearRowsTabla() {
  const arrayData = getArrayData();
  const tbody = document.getElementById("iBody");
  arrayData.forEach((element) => {
    const row = document.createElement("tr");
    const botonEliminar = document.createElement("input");
    botonEliminar.type = "button";
    botonEliminar.value = "Eliminar";
    botonEliminar.setAttribute("id", "botonEliminar");

    const botonVer = document.createElement("input");
    botonVer.type = "button";
    botonVer.value = "Ver";
    botonVer.setAttribute("id", "botonVer");

    const a = document.createElement("a");
    a.href = "ver.html";
    botonVer.appendChild(a); /*Al reves?*/

    addDataColumn(element.nombre, row);
    addDataColumn(element.apellido, row);
    addDataColumn(element.nacimiento, row);
    addDataColumn(element.genero, row);
    addDataColumn(element.iban, row);
    addDataColumn(cifrar(element.pass), row);
    addDataColumn(botonEliminar, row);
    addDataColumn(botonVer, row);

    tbody.appendChild(row);
  });
}

function addDataColumn(text, row) {
  const name = document.createElement("td");
  const texto = document.createTextNode(text);
  name.appendChild(texto);
  row.appendChild(name);
}
