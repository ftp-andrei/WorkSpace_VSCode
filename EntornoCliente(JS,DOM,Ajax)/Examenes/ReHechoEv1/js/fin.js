import { getData } from "./arrays.js";

document.addEventListener("DOMContentLoaded", function () {
  fin();
});

function fin() {
  let data = JSON.parse(getData("fin"));
  let p = document.createElement("p");
  let body = document.getElementById("final");
  if (data) {
    p.textContent = "Fin de juego, has ganado";
  } else {
    p.textContent = "Fin de juego, has perdido";
  }
  body.appendChild(p);
}
