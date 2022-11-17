/*
age >20
Cuando añades una persona que se añada la ultima
Realizar comprobaciones IBAN (maxlength y size), Nombre, Apellidos etc etc
*/

function checar() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;
  let genero = document.getElementsByName("genero").value;
  let iban =
    document.getElementById("dc1").value +
    document.getElementById("cb").value +
    document.getElementById("sc").value +
    document.getElementById("dc2").value +
    document.getElementById("nc").value;
  let pass = document.getElementById("pass").value;
}

function mostrarTabla() {
  alert("Hola");
}
