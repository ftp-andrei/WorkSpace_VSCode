import express from "express";
import cors from "cors";
import {
  getCars,
  getCarByID,
  getCarByNumBastidor,
  insertCar,
  deleteCar,
  modifyCar,
} from "./cars.service.js";
import bodyParser from "body-parser";

const app = express();
const port = 42069;

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Coge todos los coches
app.get("/cars", async (req, res) => {
  res.status(200).json(getCars());
});

// Coge coche por id
app.get("/cars/:id", async (req, res) => {
  const id = req.params.id;

  const car = await getCarByID(id);

  if (car) {
    res.status(200).json(car);
    return;
  }

  res.status(404).send("Coche no encontrado");
});

// Crea un coche
app.post("/cars", async (req, res) => {
  const car = req.body;

  const carsDatabase = await getCarByNumBastidor(car.numBastidor);

  if (carsDatabase) {
    res.status(400).send("El coche ya existe");
    return;
  }

  const newCar = await insertCar(car);
  if (newCar) {
    res.json(car);
    return;
  }
  res.status(400).send("Error al crear el coche");
});

// Borra coche por id
app.delete("/cars/:id", async (req, res) => {
  const id = req.params.id;

  if (await deleteCar(id)) {
    res.send("Car has been deleted");
    return;
  }

  res.status(400).send("Error el borrar el coche");
});

// Modifica un coche por id
app.put("/cars/:id", async (req, res) => {
  const id = req.params.id;
  const newCar = req.body;

  if (newCar.id !== id) {
    res.status(400).send("El id del objeto en el body y la URL no es la misma");
    return;
  }

  const car = await getCarByID(id);

  if (car === null || car === undefined) {
    res.status(400).json("El coche no existe");
    return;
  }

  if (await modifyCar(newCar)) {
    res.json(newCar);
    return;
  }

  res.send("Error al modificar el coche");
});

app.listen(port, () => console.log(`Estoy escuchando por el puerto ${port}!`));
