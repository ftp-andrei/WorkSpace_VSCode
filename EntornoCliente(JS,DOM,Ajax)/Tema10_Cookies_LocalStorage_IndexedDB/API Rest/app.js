import express from "express";
import cors from "cors";
import {
  getCarByID,
  getCars,
  insertCar,
  deleteCarByID,
  getCarByNumBastidor,
} from "./cars.service.js";

import bodyParser from "body-parser";

const app = express();
const port = 7777;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Obtiene todos los coches
app.get("/cars", async (req, res) => {
  res.json(await getCars());
});
// Busca un coche por ID
app.get("/cars/:id", async (req, res) => {
  const id = req.params.id;

  const car = await getCarByID(id);

  if (car.id === id) {
    res.status(200).json(car);
    return;
  }

  res.status(404).send("Coche no encontrado");
});

// Crea un coche
app.post("/cars", async (req, res) => {
  const car = req.body; //Body del car

  const carsDatabase = getCarByNumBastidor(car.numBastidor);

  if (carsDatabase) {
    res.status(400).send("El coche ya existe");
  }

  const newCar = await insertCar(car);
  if (newCar) {
    res.json(car);
    return;
  }
  res.st;

  atus(404).send("Error al crear el coche");
});

// Borrar un coche
app.delete("/cars/:id", async (req, res) => {
  // Reading id from the URL
  const id = req.params.id;

  if (await deleteCarByID(id)) {
    res.send("Has eliminado el coche");
    return;
  }
  res.status(400).send("Error al borrar el coche");
});

// Modificar un coche
app.put("/car/:id", async (req, res) => {
  const id = req.params.id;
  const newCar = req.body;

  if (newCar.id !== id) {
    res.status(400).send("El id del objeto en el body y la URL es la misma");
    return;
  }

  const car = await getCarByID(id);
  if (car === null || car === undefined) {
    res.status(400).send("El coche no existe");
    return;
  }

  if (modifyCar(newCar)) {
    res.json(newCar);
    return;
  }

  res.send("Error al modificar el coche");
});

app.listen(port, () => console.log(`Estoy escuchando el puerto ${port}!`));
