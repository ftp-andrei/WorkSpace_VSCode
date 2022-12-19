"use strict"

export function getArrayData() {
    let arrayData = localStorage.getItem("arrayData");
    if (arrayData === null) {
        return arrayData = [];
    }
    return arrayData = JSON.parse(arrayData);
}

export function storeData(nombre, raza, alineamiento, fuerza, vida, suerte) {
    let arrayData = [];
    arrayData.push({
        nombre: nombre,
        raza: raza,
        alineamiento: alineamiento,
        fuerza: fuerza,
        vida: vida,
        suerte: suerte
    });
    localStorage.setItem("arrayData", JSON.stringify(arrayData));
}