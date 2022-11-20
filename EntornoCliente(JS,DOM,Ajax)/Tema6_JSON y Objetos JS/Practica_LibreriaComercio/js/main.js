/* Objeto window ALEJARSE DE EL

Usar Local.storage

localStorage.setItem('nombre', 'Juan');
localStorage.getItem('nombre');
localStorage.removeItem('nombre');
localStorage.clear();

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
  let prestado = document.getElementById("checkboxPrestado").checked;
  let nuevoLibro = null;

  nuevoLibro = new Libro(titulo, nombre, paginas, prestado);

  localStorage.setItem(localStorage.length, JSON.stringify(nuevoLibro));
}

function recuperarDatosArray() {
  let len = localStorage.length;
  for (let i = 0; i < len; i++) {
    arrayLibros[i] = localStorage[i];
  }
  return arrayLibros;
}

function mostrarLibros() {
  let arr = recuperarDatosArray();
  // recuperamos el arrLibros

  for (let i = 0; i < arr.length; i++) {
    const contenedor = document.getElementById("wrapMain");
    const tabla = document.createElement("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let th = document.createElement("th");

    let trTxt = document.createTextNode(JSON.parse(arr[i]).titulo);
    let tdTxt;
    th.appendChild(trTxt);
    tr.appendChild(th);
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
