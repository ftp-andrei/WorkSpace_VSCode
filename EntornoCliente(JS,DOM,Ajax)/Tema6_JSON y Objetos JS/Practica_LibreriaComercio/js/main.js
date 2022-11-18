/* Objeto window ALEJARSE DE EL

Usar Local.storage

localStorage.setItem('nombre', 'Juan');
localStorage.getItem('nombre');
localStorage.removeItem('nombre');
localStorage.clear();


*/
function crear() {
  let libro = {
    nombre: document.getElementById("nombre").value,
    paginas: document.getElementById("paginas").value,
    prestado: document.getElementById("checkboxPrestado").checked,
  };

  alert("Creado!");
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
