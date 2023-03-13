import express from "express";
import Car from "../models/car.js";
import Joi from "@hapi/joi";

const router = express.Router();

// Modelo sin id ya que mongo te pone el id
const schemaCar = Joi.object({
  marca: Joi.string().min(1).max(30).required(),
  modelo: Joi.string().min(1).max(30).required(),
  descripcion: Joi.string().max(255).required(),
  precio: Joi.number().required(),
  fecha: Joi.date().required(),
  imagen: Joi.string().required(),
});
// Coge todos los coches
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json({
      error: null,
      data: cars,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Coge coche por ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Car.findOne({ _id: id });
    if (!car) {
      res.json({ error: `El coche con id ${id} no existe` });
    }
    res.json({
      error: null,
      data: car,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Coger coches por marca
// router.get("/:marca", async (req, res) => {
//   const marca = req.params.marca;
//   try {
//     const car = await Car.find({ marca: marca });
//     res.json({
//       error: null,
//       data: car,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

// Crear
router.post("/", async (req, res) => {
  // validamos que nos han mandado bien el objeto car
  const { error } = schemaCar.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Creamos el libro
  const car = new Car({
    marca: req.body.marca,
    modelo: req.body.modelo,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    fecha: req.body.fecha,
    imagen: req.body.imagen,
  });
  // Insertamos en la bd
  try {
    const savedCar = await car.save();
    res.json({
      error: null,
      data: savedCar,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Modificar por id
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const carDatabase = await Car.findOne({ _id: id });
  if (!carDatabase) {
    res.json({ error: `El coche con id ${id} no existe` });
  }

  carDatabase.marca = req.body.marca;
  carDatabase.modelo = req.body.modelo;
  carDatabase.descripcion = req.body.descripcion;
  carDatabase.precio = req.body.precio;
  carDatabase.fecha = req.body.fecha;
  carDatabase.imagen = req.body.imagen;

  try {
    const savedCar = await carDatabase.save();

    res.json({
      error: null,
      data: savedCar,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Borrar por ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteResponse = await Car.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "car deleted",
      });
      return;
    }
    res.status(404).json({ error: "Car not found" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
