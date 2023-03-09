"use strict";

// Funcion principal que realiza el cambio de moneda, además de guardar el historico
function cambiar() {
  let importe = document.getElementById("importe").value;
  let monedaUno = document.getElementById("monedaUno").value.toLowerCase();
  let monedaDos = document.getElementById("monedaDos").value.toLowerCase();

  let resultado = 0;
  if (importe != 0) {
    if (monedaDos == "dolares") {
      resultado = calculoMoneda(monedaUno, importe);
    } else {
      resultado =
        calculoMoneda(monedaUno, importe) / calculoMoneda(monedaDos, importe);
    }
  } else {
    importe = 0;
    resultado = 0;
  }
  let texto =
    fechaFormateada() +
    " Importe " +
    importe +
    " " +
    monedaUno +
    " - " +
    resultado.toFixed(2) +
    " " +
    monedaDos;
  // Añadimos el texto al textarea
  const textAreaInsercion = document.getElementById("textArea");
  textAreaInsercion.insertAdjacentHTML("afterbegin", texto + "\n");
  // Actualizamos el array para mantener el historico
  let arrHistorico = JSON.parse(getData("historico")) ?? [];
  arrHistorico.push(texto);
  saveData("historico", JSON.stringify(arrHistorico));
}
// Calcula el cambio de moneda entre las 2 seleccionadas
function calculoMoneda(moneda, importe) {
  if (moneda == "euros") {
    return importe * 1.05;
  }
  if (moneda == "libras") {
    return importe * 1.3;
  }
  if (moneda == "dolares") {
    return importe;
  }
}
// Funcion que realiza el cambio de moneda entre las dos seleccionadas.
function exchange() {
  let monedaUno = document.getElementById("monedaUno").value;
  let monedaDos = document.getElementById("monedaDos").value;
  if (monedaUno != monedaDos) {
    document.getElementById("monedaDos").value = monedaUno;
    document.getElementById("monedaUno").value = monedaDos;
  }
}
// Funcion que valida que solo se introduzcan numeros.
function soloNumeros(event) {
  var code = event ? event.which : event.keyCode;
  if (code == 8 || (code >= 48 && code <= 57)) {
    return;
  }

  event.preventDefault();
}
// Formatea la fecha
function fechaFormateada() {
  const opciones = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const d = new Date().toLocaleString("es-ES", opciones);
  return d;
}
// Al cargar la pagina devolverá el historico de cambios de divisas.
function historico() {
  let texto = JSON.parse(getData("historico"));
  const textAreaInsercion = document.getElementById("textArea");
  texto.forEach((element) => {
    textAreaInsercion.insertAdjacentHTML("afterbegin", element + "\n");
  });
}

// Guardamos el array en localStorage
function saveData(key, value) {
  localStorage.setItem(key, value);
}
// Nos devuelve el array de cambio de divisas
function getData(key) {
  return localStorage.getItem(key);
}
