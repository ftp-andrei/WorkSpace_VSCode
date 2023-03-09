"use strict";

class Libro {
  constructor(titulo, nombre, paginas, prestado) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.paginas = paginas;
    this.prestado = prestado;
  }
}
// Creamos libro y lo guardamos en el array.
function crearLibro() {
  let titulo = document.getElementById("titulo").value;
  let nombre = document.getElementById("nombre").value;
  let paginas = document.getElementById("paginas").value;
  let prestado = document.getElementById("checkboxPrestado");
  if (prestado.checked) {
    prestado = "Si";
  } else {
    prestado = "No";
  }

  let nuevoLibro = new Libro(titulo, nombre, paginas, prestado);
  // Cogemos el array de libros y añadimos el nuevo libro
  let arrLibros = JSON.parse(getData("libros")) ?? [];
  arrLibros.push(nuevoLibro);
  saveData("libros", JSON.stringify(arrLibros));
}
// Guardamos el array en sessionStorage
function saveData(key, value) {
  sessionStorage.setItem(key, value);
}
// Nos devuelve el array de libros
function getData(key) {
  return sessionStorage.getItem(key);
}
// Mostramos libros
function mostrarLibros() {
  let arr = JSON.parse(getData("libros"));

  const contenedor = document.getElementById("wrapMain");

  arr.forEach((element) => {
    const tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let th = document.createElement("th");
    let br = document.createElement("br");
    let trTituloTabla = document.createTextNode(element.titulo);
    tabla.appendChild(thead);
    thead.appendChild(th);
    th.appendChild(trTituloTabla);

    let tdNombreTabla = document.createTextNode(
      "Nombre Autor: " + element.nombre
    );

    td.appendChild(tdNombreTabla);
    tr.appendChild(td);

    td = document.createElement("td");
    let tdPaginasTabla = document.createTextNode("Paginas: " + element.paginas);

    td.appendChild(tdPaginasTabla);
    tr.appendChild(td);

    td = document.createElement("td");
    let tdPrestadoTabla = document.createTextNode(
      "Prestado: " + element.prestado
    );

    td.appendChild(tdPrestadoTabla);
    tr.appendChild(td);
    tbody.appendChild(tr);
    tabla.appendChild(tbody);
    contenedor.appendChild(br);
    contenedor.appendChild(tabla);
  });
}

function soloNumeros(event) {
  var code = event ? event.which : event.keyCode;
  if (code == 8 || (code >= 48 && code <= 57)) {
    return;
  }

  event.preventDefault();
}
