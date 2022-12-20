"use strict";
export function validarCamposVacíos(elemento) {
  if (elemento === null || elemento === undefined || elemento === "") {
    return true;
  }
  return false;
}

export function validarTamaño(tamaño) {
  if (isNaN(tamaño)) {
    return "El tamaño debe ser un número positivo";
  }
  if (tamaño <= 0) {
    return "El tamaño mínimo es 1";
  }
  if (tamaño > 20) {
    return "El tamaño máximo es 20";
  }
  return "";
}

export function validarAnchoBorde(anchoBorde) {
  if (isNaN(anchoBorde)) {
    return "El ancho del borde debe ser un número positivo";
  }
  if (anchoBorde <= 0) {
    return "El ancho del borde mínimo es 1";
  }
  if (anchoBorde > 20) {
    return "El ancho del borde máximo es 20";
  }
  return "";
}

export function validarBackground(background) {
  const regexpHexadecimal = /[0-9a-f]+/i;

  if (!regexpHexadecimal.test(background)) {
    return "El background no es de tipo hexadecimal";
  }
  return "";
}
