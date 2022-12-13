//Guardar arrays
"use strict";

export function getArrayData() {
  let arrayData = localStorage.getItem("arrayData");
  if (arrayData === null) {
    return (arrayData = []);
  }
  return (arrayData = JSON.parse(arrayData));
}

export function storeData(nombre, raza, caracter, fuerza, vida, suerte) {
  let arrayData = getArrayData();
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
