/* Objeto window ALEJARSE DE EL

Usar Local.storage

localStorage.setItem('nombre', 'Juan');
localStorage.getItem('nombre');
localStorage.removeItem('nombre');
localStorage.clear();


*/
`use strict`;
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

function crear() {
  let libro = {
    titulo: document.getElementById("titulo").value,
    nombre: document.getElementById("nombre").value,
    paginas: document.getElementById("paginas").value,
    prestado: document.getElementById("checkboxPrestado").checked,
  };
  let librito = JSON.parse(libro);

  alert(librito);
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
