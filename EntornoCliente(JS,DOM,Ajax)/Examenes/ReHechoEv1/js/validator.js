"use strict";
// Validacion campos vacios
export function checkIfElementValueIsEmpty(element, nombreElemento) {
  if (element === null || element === undefined || element === "") {
    return `The element ${nombreElemento} has no value! <br>`;
  }
  return "";
}
// Validacion gastar todos los puntos Formulario
export function checkIfElementValueIsZero(element, nombreElemento) {
  if (element !== "0") {
    return `Tienes que gastar todos los puntos, te quedan ${nombreElemento} ! <br>`;
  }
  return "";
}
