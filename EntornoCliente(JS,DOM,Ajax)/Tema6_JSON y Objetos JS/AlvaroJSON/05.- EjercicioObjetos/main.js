`use strict`;

const vehiculos = [];

class Vehiculo {
  constructor(nombre, bastidor, color, foto) {
    this.nombre = nombre;
    this.bastidor = bastidor;
    this.color = color;
    this.foto = foto;
  }
  detalles() {
    console.log(`
            Vehículo: ${this.nombre},
            Color: ${this.color},
            bastidor:${this.bastidor},
            foto:${this.foto}`);
  }
}

class Moto extends Vehiculo {
  caballito() {
    console.log(`A hacer caballitos con la moto ${this.nombre}`);
  }
}

class Coche extends Vehiculo {
  derrape() {
    console.log(`A derrapar con el coche ${this.nombre}`);
  }
}

class Furgoneta extends Vehiculo {
  mudanza() {
    console.log(`A mudarse con la furgoneta ${this.nombre}`);
  }
}

function concesionario() {
  let tipoVehiculo = document.querySelector(
    'input[name="vehiculo"]:checked'
  ).value;
  let nombre = document.getElementById("nombre").value;
  let bastidor = document.getElementById("bastidor").value;
  let color = document.getElementById("color").value;
  let foto = document.getElementById("foto").value;
  let nuevoVehiculo = null;

  if (tipoVehiculo === "coche") {
    nuevoVehiculo = new Coche(nombre, bastidor, color, foto);
  } else if (tipoVehiculo === "moto") {
    nuevoVehiculo = new Moto(nombre, bastidor, color, foto);
  } else {
    nuevoVehiculo = new Furgoneta(nombre, bastidor, color, foto);
  }

  vehiculos.push(nuevoVehiculo);
  nuevoVehiculo.detalles();
}

function displayTodo() {
  if (document.getElementById("coche").checked) {
    document.getElementById("radioCoche").style.display = "initial";
  }
  if (document.getElementById("moto").checked) {
    document.getElementById("radioMoto").style.display = "initial";
  }
  if (document.getElementById("furgoneta").checked) {
    document.getElementById("radioFurgoneta").style.display = "initial";
  }
}
