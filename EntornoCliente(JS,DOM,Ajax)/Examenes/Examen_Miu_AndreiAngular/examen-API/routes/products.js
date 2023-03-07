import express from "express";
import product from "../models/product.js";
import Joi from "@hapi/joi";

// creamos un router
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un producto, el nombre habria que cambiarlo en verdad (cambiado)
const schemaproduct = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().min(6).max(255).required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  //Añadir user
});

// especificamos cómo debe ser el objeto que venga de un producto que queremos añadir ya que el id lo mete mongo
const schemaAddproduct = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  //Añadir user
});
// Coge todos los productos
router.get("/", async (req, res) => {
  // products = pillar todos los productos, lo suyo seria poner un try catch supongo como abajo
  const products = await product.find();
  // metemos los productos a la respuesta y todo correcto
  res.json({
    error: null,
    data: products,
  });
});
// Crea un producto
router.post("/", async (req, res) => {
  // validamos que nos han mandado bien el objeto producto
  const { error } = schemaAddproduct.validate(req.body);

  // si no error 400 y a correr
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // miramos si ya existe el producto con ese _id
  const productExists = await product.findOne({ _id: req.body._id });
  // si existe error 400 y a correr
  if (productExists) {
    return res
      .status(400)
      .json({ error: `El producto con _id ${req.body._id} ya existe` });
  }
  // creamos el objeto producto
  const product = new product({
    name: Joi.string().min(6).max(255).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  });
  // y lo insertamos en la bd
  try {
    const savedproduct = await product.save();
    res.json({
      error: null,
      data: savedproduct,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Modificar producto por id
router.put("/:id", async (req, res) => {
  // id = al id que viene en la url de consulta
  const id = req.params.id;
  // error = si hay error en la estructura del objeto que se manda en el body
  const { error } = schemaproduct.validate(req.body);

  // si hay error devuelves una respuesta status 400 con el error
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // si el id que viene en la url no es el mismo que el del body del producto a modificar error400 y el error
  if (id != req.body._id) {
    return res
      .status(400)
      .json({ error: `El id ${_id} no coincide con el de body` });
  }

  // productDatabase = buscar el producto con el _id especificado en el body, si no existe no se puede reemplazar, 400 y error
  const productDatabase = await product.findOne({ _id: req.body._id });
  if (!productDatabase) {
    return res
      .status(400)
      .json({ error: `El producto con _id ${req.body._id} no existe` });
  }

  // si se ha encontrado todo bien cogemos ese producto y sustituimos sus propiedades por las del que nos han pasado
  productDatabase.name = req.body.name;
  productDatabase.description = req.body.description;
  productDatabase.price = req.body.price;

  // Devolvemos producto
  try {
    const savedproduct = await productDatabase.save();

    res.json({
      error: null,
      data: savedproduct,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Borrar por id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteResponse = await product.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "product deleted",
      });
      return;
    }
    res.status(404).json({ error: "product not found" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
