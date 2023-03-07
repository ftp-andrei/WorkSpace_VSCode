import express from "express";
import car from "../models/car.js";
import Joi from "@hapi/joi"; // para validar objeto

const router = express.Router();
// validar objetos
const schemaRegister = Joi.object({
  _id: Joi.string().required(),
  marca: Joi.string().min(6).max(255).required(),
  modelo: Joi.string().min(1).required(),
  fecha: Joi.date().required(),
  precio: Joi.number().required().min(1),
  img: Joi.string().min(10).required(),
});

const schemaAddRegister = Joi.object({
  marca: Joi.string().min(6).max(255).required(),
  modelo: Joi.string().required().min(1),
  fecha: Joi.date().required(),
  precio: Joi.number().required().min(1),
  img: Joi.string().min(10).required(),
});

// Obtiene todos los coches
router.get("/", async (req, res) => {
  const cars = await car.find();
  res.json({
    error: null,
    data: cars,
  });
});
// Busca por modelo
router.get("/:model", async (req, res) => {
  const model = req.params.model;
  const cars = await car.find({ model: model });
  res.json({
    error: null,
    data: cars,
  });
});

// Crear un coche
router.post("/", async (req, res) => {
  const { error } = schemaAddRegister.validate(req.body);
  // Si hay un error devolvemos un 400
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  // Comprueba si existe el isbn
  const carExists = await car.findOne({ isbn: req.body.isbn });
  if (carExists) {
    return res
      .status(400)
      .json({ error: `El coche con isbn ${req.body.isbn} no existe` });
  }
  // Creamos el objeto coche
  const car = new car({
    //Todo menos la id
    marca: req.body.marca,
    modelo: req.body.modelo,
    fecha: req.body.fecha,
    precio: req.body.precio,
    img: req.body.img,
  });

  // Guardamos el coche
  try {
    const savedcar = await car.save();
    res.json({
      error: null,
      data: savedcar,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: `El coche ${req.body.marca} no se a podido guardar` });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { error } = schemaRegister.validate(req.body);
  // Si hay un error devolvemos un 400
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Si la id es distinta
  if (id != req.body._id) {
    return res.status(400).json({ error: `El id  ${id} no existe` });
  }

  // Comprueba si existe el coche
  const carDatabase = await car.findOne({ isbn: req.body.isbn });
  if (!carDatabase) {
    return res
      .status(400)
      .json({ error: `El coche ${req.body.isbn} no existe` });
  }
  // Creamos el objeto coche machacandolo
  //Todo menos el ID
  carDatabase.marca = req.body.marca;
  carDatabase.modelo = req.body.modelo;
  carDatabase.fecha = req.body.fecha;
  carDatabase.precio = req.body.precio;
  carDatabase.img = req.body.img;
  // Guardamos el coche
  try {
    const savedcar = await car.save();
    res.json({
      error: null,
      data: savedcar,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: `El coche ${req.body.marca} no se a podido guardar` });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteResponse = await car.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "Se a borrado correctamente",
      });
      return;
    }
    res.status(404).json({
      error: "coche no encontrado",
    });
  } catch (error) {
    //Salta error si ponemos id que no existe.
    //Para poner uno personalizado modificamos el json
    res.status(400).json({
      error: "El coche no se ha encontrado",
    });
  }
});

export default router;
