function raiz(num) {
  let suma = 0;
  for (i = 1; i <= num; i++) {
    if (i * i === num) {
      suma = suma + i;
      return suma;
    }
  }
}
