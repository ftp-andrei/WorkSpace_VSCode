//Guardar arrays
"use strict";

export function getArrayData() {
  let arrayData = localStorage.getItem("arrayData");
  if (arrayData === null) {
    return (arrayData = []);
  }
  return (arrayData = JSON.parse(arrayData));
}
// Aqui construimos el arr con los datos de form y lo guardamos
export function storeData(nombre, raza, caracter, fuerza, vida, suerte) {
  let arrayData = [];
  arrayData.push({
    nombre: nombre,
    raza: raza,
    caracter: caracter,
    fuerza: fuerza,
    vida: vida,
    suerte: suerte,
  });
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
}

// Guardamos historico en localStorage
export function saveData(key, value) {
  localStorage.setItem(key, value);
}
// Nos devuelve el array de historico
export function getData(key) {
  return localStorage.getItem(key);
}
