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
    botonEliminar.setAttribute("type", "button");
    botonEliminar.setAttribute("value", "Eliminar");
    botonEliminar.setAttribute("id", "botonEliminar");

    const botonVer = document.createElement("input");
    botonVer.setAttribute("type", "button");
    botonVer.setAttribute("value", "Ver");
    botonVer.setAttribute("id", "botonVer");

    const enlace = document.createElement("a");
    enlace.setAttribute("href", "ver.html");
    enlace.appendChild(botonVer);
    addDataColumn(element.nombre, row);
    addDataColumn(element.apellido, row);
    addDataColumn(element.telefono, row);
    addDataColumn(element.nacimiento, row);
    addDataColumn(element.genero, row);
    addDataColumn(element.interes, row);
    addDataColumn(element.iban, row);
    addDataColumn(cifrar(element.pass), row);
    addDataColumnButton(botonEliminar, row);
    addDataColumnButton(enlace, row);

    tbody.appendChild(row);
  });
}

function addDataColumn(text, row) {
  const name = document.createElement("td");
  const texto = document.createTextNode(text);
  name.appendChild(texto);
  row.appendChild(name);
}
function addDataColumnButton(button, row) {
  let td = document.createElement("td");
  td.appendChild(button);
  row.appendChild(td);
}
