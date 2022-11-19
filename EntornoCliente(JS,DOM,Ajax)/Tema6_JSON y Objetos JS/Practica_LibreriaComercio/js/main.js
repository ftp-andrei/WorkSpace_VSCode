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

  const nuevoLibro = new Libro(titulo, nombre, paginas, prestado);
  arrayLibros.push(JSON.parse(nuevoLibro));
  //localStorage.setItem(titulo, JSON.stringify(arrayLibros));
}

// function mostrarLibros() {
//   let resultado = document.getElementById("wrapMain").value;
//   for (let i = 0; i < arrayLibros.length; i++) {
//     resultado.insertAdjacentHTML("afterbegin", arrayLibros[i] + "\n");
//   }
// }

function mostrarLibros() {
  let crearTabla;
  let cabecera;
  let bodyTabla;

  arrayLibros.forEach((element) => {
    crearTabla = document.createElement("table");

    cabecera = document
      .createElement("thead")
      .appendChild(document.createElement("tr"))
      .appendChild(document.createElement("th"));

    bodyTabla = document
      .createElement("tbody")
      .appendChild(document.createElement("td"));

    /**
     * Cambiar el crearTabla de abajo por los componentes y valores de cabeza y bodyTabla respectivamente
     *
     * Ejemplo:
     *
     * cabecera.innerText = JSON.stringify(TITULO);
     * bodyTabla.innerText = JSON.stringify(NOMBRE,PAGINAS,PRESTADO);
     */

    crearTabla.innerText = JSON.stringify(element);

    document
      .getElementById("wrapMain")
      .appendChild(crearTabla)
      .appendChild(cabecera)
      .appendChild(bodyTabla);
  });
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
