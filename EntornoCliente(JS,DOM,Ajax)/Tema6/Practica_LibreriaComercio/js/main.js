function crear() {
  let nombreLibro = document.getElementById("nombre").value;
  let paginasLibro = document.getElementById("paginas").value;
  let esPrestado = document.getElementById("prestado");

  let libro = {
    nombre: nombreLibro,
    paginas: paginasLibro,
    prestado: esPrestado,
  };

  alert(stringify(libro));
}

function stringify(x) {
  console.log(Object.prototype.toString.call(x));
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
