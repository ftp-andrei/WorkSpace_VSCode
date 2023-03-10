import express from "express";
import Car from "../models/car.js";
import Joi from "@hapi/joi";

const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un Car
// const schemaCar = Joi.object({
//   _id: Joi.string().required(),
//   marca: Joi.string().min(1).max(30).required(),
//   modelo: Joi.string().min(1).max(30).required(),
//   descripcion: Joi.string().max(255).required(),
//   precio: Joi.number().required(),
//   fecha: Joi.date().required(),
//   imagen: Joi.string().required(),
// });
// Modelo sin id ya que mongo te pone el id
const schemaAddCar = Joi.object({
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

// Coge coge por id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id != req.body._id) {
    return res
      .status(400)
      .json({ error: `El id ${id} no coincide con el de body` });
  }
  try {
    const cars = await Car.findOne({ _id: req.body._id });
    if (!cars) {
      return res
        .status(400)
        .json({ error: `El coche con id ${req.body._id} no existe` });
    }
    // Devolvemos el coche si todo va bien
    res.json({
      error: null,
      data: cars,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Crear
router.post("/", async (req, res) => {
  // validamos que nos han mandado bien el objeto car
  const { error } = schemaAddCar.validate(req.body);

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

// router.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const { error } = schemaCar.validate(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   if (id != req.body._id) {
//     return res
//       .status(400)
//       .json({ error: `El id ${id} no coincide con el de body` });
//   }

//   const bookDatabase = await Book.findOne({ isbn: req.body.isbn });
//   if (!bookDatabase) {
//     return res
//       .status(400)
//       .json({ error: `El libro con isbn ${req.body.isbn} no existe` });
//   }

//   bookDatabase.name = req.body.name;
//   bookDatabase.pages = req.body.pages;
//   bookDatabase.fecha = req.body.fecha;

//   try {
//     const savedBook = await bookDatabase.save();

//     res.json({
//       error: null,
//       data: savedBook,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });
// Borrar por ID
// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const deleteResponse = await Car.deleteOne({ _id: id });
//     if (deleteResponse.deletedCount == 1) {
//       res.json({
//         error: null,
//         data: "car deleted",
//       });
//       return;
//     }
//     res.status(404).json({ error: "Car not found" });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

export default router;
