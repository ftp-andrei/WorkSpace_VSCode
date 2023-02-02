document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("txtMostrar")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });

  document
    .getElementById("botonMostrar")
    .addEventListener("click", function (event) {
      mostrarPorId();
    });

  document
    .getElementById("mostrar10")
    .addEventListener("click", function (event) {
      mostrarPorId();
    });
});

function soloNumeros(event) {
  var code = event ? event.which : event.keyCode;
  if (code == 8 || (code >= 48 && code <= 57)) {
    return;
  }

  event.preventDefault();
}

function mostrarPorId() {
  let txtMostrar = document.getElementById("txtMostrar").value;
  fetch("https://pokeapi.co/api/v2/pokemon/" + txtMostrar)
    .then((response) => response.json())
    .then((data) => {
      const divSuperior = document.createElement("div");
      divSuperior.classList.add(
        "card",
        "d-flex",
        "text-center",
        "w-50",
        "m-auto",
        "bg-light",
        "mt-3"
      );

      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Pokemon";
      divCardBody.appendChild(cardTitle);

      for (let x in data) {
        if (
          x != "moves" &&
          x != "abilities" &&
          x != "species" &&
          x != "sprites" &&
          x != "stats" &&
          x != "game_indices" &&
          x != "forms" &&
          x != "types" &&
          x != "location_area_encounters" &&
          x != "past_types" &&
          x != "held_items"
        ) {
          const property = document.createElement("p");
          property.classList.add("card-text");
          property.textContent = `${x} ${data[x]}`;
          divCardBody.appendChild(property);
        }
      }

      divSuperior.appendChild(divCardBody);
      container.appendChild(divSuperior);
    });
}
