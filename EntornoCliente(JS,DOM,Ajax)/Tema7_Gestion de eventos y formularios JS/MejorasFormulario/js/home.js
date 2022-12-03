"use strict";
import { getArrayData, cifrar } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearRowsTabla();
});

function crearRowsTabla() {
  let contador = 0;
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
    addDataColumnButtonEliminar(botonEliminar, row, contador);
    addDataColumnButtonVer(enlace, row, element);
    contador++;
    tbody.appendChild(row);
  });
}

function addDataColumn(text, row) {
  const name = document.createElement("td");
  const texto = document.createTextNode(text);
  name.appendChild(texto);
  row.appendChild(name);
}
function addDataColumnButtonEliminar(button, row, contador) {
  let td = document.createElement("td");
  button.addEventListener("click", function () {
    eliminar(contador);
  });
  td.appendChild(button);
  row.appendChild(td);
}

function addDataColumnButtonVer(button, row, element) {
  let td = document.createElement("td");
  button.addEventListener("click", function () {
    verDatosElemento(element);
  });
  td.appendChild(button);
  row.appendChild(td);
}

function eliminar(contador) {
  const data = getArrayData();
  data.splice(contador, 1);
  localStorage.setItem("arrayData", JSON.stringify(data));
}

export function verDatosElemento(element) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "divJSON");

  let parrafo = document.createElement("p");
  parrafo.innerText = JSON.stringify(element.name);

  newDiv.appendChild(parrafo);
  //cargarXML();
}

function cargarXML() {
  let json = verDatosElemento(element);
  // Importar libreria XML
  let xml = json2xml(json, { compact: true, spaces: 4 });

  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "divXML");

  let parrafo = document.createElement("p");
  parrafo.innerText = xml;
  newDiv.appendChild(parrafo);
}
