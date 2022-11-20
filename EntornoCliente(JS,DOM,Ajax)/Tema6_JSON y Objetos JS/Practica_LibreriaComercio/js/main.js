/* Objeto window ALEJARSE DE EL

Usar Local.storage

sessionStorage.setItem('nombre', 'Juan');
sessionStorage.getItem('nombre');
sessionStorage.removeItem('nombre');
sessionStorage.clear();

*/
"use strict";
const arrayLibros = [];

class Libro {
  constructor(titulo, nombre, paginas, prestado) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.paginas = paginas;
    this.prestado = prestado;
  }

  printDetails() {
    console.log(`
    Titulo: ${this.titulo},
    Nombre: ${this.nombre},
    Paginas: ${this.paginas},
    Prestado: ${this.prestado},
    `);
  }
}

function crearLibro() {
  let titulo = document.getElementById("titulo").value;
  let nombre = document.getElementById("nombre").value;
  let paginas = document.getElementById("paginas").value;
  let prestado = "";
  if (document.getElementById("checkboxPrestado").checked) {
    prestado = "Si";
  } else {
    prestado = "No";
  }
  let nuevoLibro = null;

  nuevoLibro = new Libro(titulo, nombre, paginas, prestado);

  sessionStorage.setItem(sessionStorage.length, JSON.stringify(nuevoLibro));
}

function recuperarDatosArray() {
  let len = sessionStorage.length;
  for (let i = 0; i < len; i++) {
    arrayLibros[i] = sessionStorage[i];
  }
  return arrayLibros;
}

function mostrarLibros() {
  let arr = recuperarDatosArray();

  for (let i = 1; i < arr.length; i++) {
    const contenedor = document.getElementById("wrapMain");
    const tabla = document.createElement("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let th = document.createElement("th");
    let br = document.createElement("br");
    let trTituloTabla = document.createTextNode(JSON.parse(arr[i]).titulo);
    th.appendChild(trTituloTabla);
    tr.appendChild(th);

    tabla.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    let tdNombreTabla = document.createTextNode(
      "Nombre Autor: " + JSON.parse(arr[i]).nombre
    );
    td.appendChild(tdNombreTabla);
    tr.appendChild(td);

    tabla.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    let tdPaginasTabla = document.createTextNode(
      "Paginas: " + JSON.parse(arr[i]).paginas
    );
    td.appendChild(tdPaginasTabla);
    tr.appendChild(td);

    tabla.appendChild(tr);

    tr = document.createElement("tr");

    td = document.createElement("td");
    let tdPrestadoTabla = document.createTextNode(
      "Prestado: " + JSON.parse(arr[i]).prestado
    );
    td.appendChild(tdPrestadoTabla);
    tr.appendChild(td);

    tabla.appendChild(tr);

    contenedor.appendChild(tabla);
  }
}

function soloNumeros(num) {
  var code = num ? num.which : num.keyCode;
  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}
