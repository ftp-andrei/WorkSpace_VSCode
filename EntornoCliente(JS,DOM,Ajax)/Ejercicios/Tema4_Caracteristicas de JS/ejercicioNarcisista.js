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
  let suma = 0;
  let array = [];
  for (let i = num.toString().length; i >= 1; i--) {
    array = [Math.trunc(num / (10 ^ (i - 1)))];
    num = ((num / (10 ^ (i - 1))) % 1) * (10 ^ (i - 1));
  }
  for (let i = 0; i < array.length; i++) {
    suma = array[i] ^ (num + suma);
    if (suma > num) return "No es narcisista";
  }
  if (suma === num) return "Es narcisista";
  else {
    return "No es narcisista";
  }
}
