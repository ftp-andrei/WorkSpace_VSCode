import express from 'express';
import Book from '../models/book.js';
import Joi from '@hapi/joi';



const router = express.Router();

const schemaRegister = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().required().min(1),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required()
})

const schemaAddRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().required().min(1),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required()
})

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json({
    error: null,
    data: books
  });
});

router.post('/', async (req, res) => {
  const { error } = schemaAddRegister.validate(req.body)

  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }

  const bookExists = await Book.findOne({ isbn: req.body.isbn });
  if (bookExists) {
    return res.status(400).json(
      { error: `El libro con isbn ${req.body.isbn} ya existe` }
    )
  }
  const book = new Book({
    name: req.body.name,
    pages: req.body.pages,
    isbn: req.body.isbn,
    fecha: req.body.fecha
  });
  try {
    const savedBook = await book.save()
    res.json({
      error: null,
      data: savedBook
    })
  } catch (error) {
    res.status(400).json({ error: error })
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { error } = schemaRegister.validate(req.body)

  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }

  if (id != req.body._id) {
    return res.status(400).json(
      { error: `El id ${id} no coincide con el de body` }
    )
  }

  const bookDatabase = await Book.findOne({ isbn: req.body.isbn });
  if (!bookDatabase) {
    return res.status(400).json(
      { error: `El libro con isbn ${req.body.isbn} no existe` }
    )
  }

  bookDatabase.name = req.body.name;
  bookDatabase.pages = req.body.pages;
  bookDatabase.fecha = req.body.fecha;

  try {
    const savedBook = await bookDatabase.save();

    res.json({
      error: null,
      data: savedBook
    })
  } catch (error) {
    res.status(400).json({ error: error })
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deleteResponse = await Book.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "book deleted"
      })
      return;
    }
    res.status(404).json({ error: 'Book not found' });

  } catch (error) {
    res.status(400).json({ error: error })
  }
});

export default router