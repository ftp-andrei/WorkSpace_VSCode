import express from "express";
import Car from "../models/car.js";
import Joi from "@hapi/joi";

const router = express.Router();

const schemaRegister = Joi.object({
  _id: Joi.string().required(),
  img: Joi.string().required(),
  marca: Joi.string().required(),
  modelo: Joi.string().required(),
  year: Joi.date().required(),
  precio: Joi.number().required(),
  desc: Joi.string(),
});

const schemaAddRegister = Joi.object({
  img: Joi.string().required(),
  marca: Joi.string().required(),
  modelo: Joi.string().required(),
  year: Joi.date().required(),
  precio: Joi.number().required(),
  desc: Joi.string(),
});

router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json({
    error: null,
    data: cars,
  });
});

router.get("/:model", async (req, res) => {
  const model = req.params.model;
  const cars = await Car.find({ model: model });
  res.json({
    error: null,
    data: cars,
  });
});

router.post("/", async (req, res) => {
  const { error } = schemaAddRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const carExists = await Car.findOne({ modelo: req.body.modelo });
  if (carExists) {
    return res
      .status(400)
      .json({ error: `El coche con modelo ${req.body.modelo} ya existe` });
  }
  const car = new Car({
    img: req.body.img,
    marca: req.body.marca,
    modelo: req.body.modelo,
    year: req.body.year,
    precio: req.body.precio,
    desc: req.body.desc,
  });
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

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  if (id != req.body._id) {
    return res
      .status(400)
      .json({ error: `El id ${id} no coincide con el de body` });
  }

  const carDatabase = await Car.findOne({ modelo: req.body.modelo });
  if (!carDatabase) {
    return res
      .status(400)
      .json({ error: `El coche con modelo ${req.body.modelo} no existe` });
  }

  carDatabase.img = req.body.img;
  carDatabase.marca = req.body.marca;
  carDatabase.modelo = req.body.modelo;
  carDatabase.year = req.body.year;
  carDatabase.precio = req.body.precio;
  carDatabase.desc = req.body.desc;

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
