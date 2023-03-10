// Funcion que comprueba que solo se introduzcan numeros en un campo de texto
export function soloNumeros(event) {
  var code = event ? event.which : event.keyCode;
  if (code == 8 || (code >= 48 && code <= 57)) {
    return;
  }

  event.preventDefault();
}
// Funcion que comprueba que el campo no esté vacio
export function camposVacios(elemento) {
  if (elemento === null || elemento === undefined || elemento === "") {
    return false;
  }
  return true;
}

export function validarTamano(elemento) {
  if (elemento <= 0 || elemento >= 21) {
    return false;
  }
  return true;
}

export function validarBackground(background) {
  const regexpHexadecimal = /[0-9a-f]+/i;

  if (!regexpHexadecimal.test(background)) {
    return false;
  }
  return true;
}
