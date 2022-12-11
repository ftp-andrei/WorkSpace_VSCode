"use strict";

export function getArrayData() {
  let arrayData = localStorage.getItem("arrayData");
  if (arrayData === null) {
    return (arrayData = []);
  }
  return (arrayData = JSON.parse(arrayData));
}

export function storeData(tamano, anchoBorde, backgroundColor) {
  let arrayData = [];
  arrayData.push({
    tamano: tamano,
    anchoBorde: anchoBorde,
    backgroundColor: backgroundColor,
  });
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
}
