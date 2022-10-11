function raiz(num) {
  let suma = 0;
  for (i = 1; i <= num; i++) {
    if (i * i === num) {
      suma = suma + i;
      return suma;
    }
  }
}

`use strict`;
function narcisista(num) {
  let digitos = getlength(num);
  let suma = 0;
  for (let i = digitos.length; i >= 1; i--) {
    suma = suma + num / i;
    num = num / i;
  }
}

function getlength(number) {
  return number.toString().length();
}
