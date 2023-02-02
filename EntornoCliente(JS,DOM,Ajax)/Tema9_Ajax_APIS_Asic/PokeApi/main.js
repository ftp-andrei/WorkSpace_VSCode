document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("txtMostrar")
    .addEventListener("keypress", function (event) {
      soloNumeros(event);
    });

  document
    .getElementById("botonMostrar")
    .addEventListener("click", function () {
      mostrarPorId();
    });

  document.getElementById("mostrar10").addEventListener("click", function () {
    mostrar10();
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
      var container = document.querySelector("#container");
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
      const t1 = document.createElement("p");
      t1.classList.add("card-text");
      t1.textContent = "ID: " + data.id;
      divCardBody.appendChild(t1);

      const t2 = document.createElement("p");
      t2.classList.add("card-text");
      t2.textContent = "Nombre: " + data.name;
      divCardBody.appendChild(t2);

      const t3 = document.createElement("p");
      t3.classList.add("card-text");
      t3.textContent = "Altura: " + data.height;
      divCardBody.appendChild(t3);

      divSuperior.appendChild(divCardBody);
      container.appendChild(divSuperior);
    });
}

function mostrar10() {
  var container = document.querySelector("#container");
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
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
          const texto = document.createElement("p");
          texto.classList.add("card-text");
          texto.textContent = `${x} ${data[x]} `;
          divCardBody.appendChild(texto);
        }
        divSuperior.appendChild(divCardBody);
        container.appendChild(divSuperior);
      });
    });
}
