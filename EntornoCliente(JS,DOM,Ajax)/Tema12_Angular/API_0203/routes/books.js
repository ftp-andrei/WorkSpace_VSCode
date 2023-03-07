import express from "express";
import Book from "../models/book.js";
import Joi from "@hapi/joi"; // para validar objeto

const router = express.Router();
// validar objetos
const schemaRegister = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().min(1).required(),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required(),
});

const schemaAddRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().required().min(1),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required(),
});

// Obtiene todos los libros
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json({
    error: null,
    data: books,
  });
});

// Crear un libro
router.post("/", async (req, res) => {
  const { error } = schemaAddRegister.validate(req.body);
  // Si hay un error devolvemos un 400
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  // Comprueba si existe el isbn
  const bookExists = await Book.findOne({ isbn: req.body.isbn });
  if (bookExists) {
    return res
      .status(400)
      .json({ error: `El libro con isbn ${req.body.isbn} no existe` });
  }
  // Creamos el objeto libro
  const book = new Book({
    name: req.body.name,
    pages: req.body.pages,
    isbn: req.body.isbn,
    fecha: req.body.fecha,
  });

  // Guardamos el libro
  try {
    const savedBook = await book.save();
    res.json({
      error: null,
      data: savedBook,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: `El libro ${req.body.name} no se a podido guardar` });
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

  // Comprueba si existe el libro
  const bookDatabase = await Book.findOne({ isbn: req.body.isbn });
  if (!bookDatabase) {
    return res
      .status(400)
      .json({ error: `El libro ${req.body.isbn} no existe` });
  }
  // Creamos el objeto libro machacandolo
  bookDatabase.name = req.body.name;
  bookDatabase.pages = req.body.pages;
  bookDatabase.fecha = req.body.fecha;

  // Guardamos el libro
  try {
    const savedBook = await book.save();
    res.json({
      error: null,
      data: savedBook,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: `El libro ${req.body.name} no se a podido guardar` });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteResponse = await Book.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "Se a borrado correctamente",
      });
      return;
    }
    res.status(404).json({
      error: "Libro no encontrado",
    });
  } catch (error) {
    //Salta error si ponemos id que no existe.
    //Para poner uno personalizado modificamos el json
    res.status(400).json({
      error: "El libro no se ha encontrado",
    });
  }
});

export default router;
