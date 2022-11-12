function cambiar() {
  let importe = document.getElementById("importe").value;
  let moneda1 = document.getElementById("moneda1").value.toLowerCase();
  let moneda2 = document.getElementById("moneda2").value.toLowerCase();
  // 1 Euros = Dollars 1.05
  // 1 Libra  = Dollars  1.30

  let resultado = 0;

  if (moneda2 == "dolares") {
    resultado = calculoMoneda(moneda1, importe);
  } else {
    resultado =
      calculoMoneda(moneda1, importe) / calculoMoneda(moneda2, importe);
  }

  let texto =
    fechaFormateada() +
    " Importe " +
    importe +
    " " +
    moneda1 +
    " - " +
    resultado.toFixed(2) +
    " " +
    moneda2;

  const textAreaInsercion = document.getElementById("textArea");
  textAreaInsercion.insertAdjacentHTML("afterbegin", texto + "\n");
  setCookie("user", textAreaInsercion, { secure: true, "max-age": 3600 });
}

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

function exchange() {
  let moneda1 = document.getElementById("moneda1").value;
  let moneda2 = document.getElementById("moneda2").value;
  if (moneda1 != moneda2) {
    document.getElementById("moneda2").value = moneda1;
    document.getElementById("moneda1").value = moneda2;
  }
}

function soloNumeros(num) {
  var code = num ? num.which : num.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (code >= 48 && code <= 57) {
    // is a number.
    return true;
  } else {
    // other keys.
    return false;
  }
}

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
/* document.cookie */
function getCookie() {
  return decodeURIComponent("user");
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
