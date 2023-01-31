export function getArrayData() {
  let arrayData = localStorage.getItem("arrayData");
  if (arrayData === null) {
    return arrayData = [];
  }
  return arrayData = JSON.parse(arrayData);
}

export function storeData(nombre, apellido, username, city, zip, tel, dni, pass) {
  let arrayData = getArrayData();
  arrayData.push({
    nombre: nombre,
    apellido: apellido,
    username: username,
    city: city,
    zip: zip,
    tel: tel,
    dni: dni,
    pass: pass
  });
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
}