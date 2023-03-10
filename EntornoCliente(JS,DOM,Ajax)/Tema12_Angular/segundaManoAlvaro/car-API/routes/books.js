import express from 'express';
import Book from '../models/book.js';
import Joi from '@hapi/joi';


// creamos un router 
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un libro, el nombre habria que cambiarlo en verdad (cambiado)
const schemaBook = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().required().min(1),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required()
})

// especificamos cómo debe ser el objeto que venga de un libro que queremos añadir ya que el id lo mete mongo
const schemaAddBook = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  pages: Joi.number().required().min(1),
  isbn: Joi.string().min(6).max(8).required(),
  fecha: Joi.date().required()
})

router.get('/', async (req, res) => {
  // books = pillar todos los libros, lo suyo seria poner un try catch supongo como abajo
  const books = await Book.find();
  // metemos los libros a la respuesta y todo correcto
  res.json({
    error: null,
    data: books
  });
});

router.post('/', async (req, res) => {
  // validamos que nos han mandado bien el objeto libro 
  const { error } = schemaAddBook.validate(req.body)

  // si no error 400 y a correr
  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }

  // miramos si ya existe el libro con ese isbn
  const bookExists = await Book.findOne({ isbn: req.body.isbn });
  // si existe error 400 y a correr
  if (bookExists) {
    return res.status(400).json(
      { error: `El libro con isbn ${req.body.isbn} ya existe` }
    )
  }
  // creamos el objeto libro
  const book = new Book({
    name: req.body.name,
    pages: req.body.pages,
    isbn: req.body.isbn,
    fecha: req.body.fecha
  });
  // y lo insertamos en la bd
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
  // id = al id que viene en la url de consulta
  const id = req.params.id;
  // error = si hay error en la estructura del objeto que se manda en el body 
  const { error } = schemaBook.validate(req.body)

  // si hay error devuelves una respuesta status 400 con el error
  if (error) {
    return res.status(400).json(
      { error: error.details[0].message }
    )
  }

  // si el id que viene en la url no es el mismo que el del body del libro a modificar error400 y el error
  if (id != req.body._id) {
    return res.status(400).json(
      { error: `El id ${id} no coincide con el de body` }
    )
  }

  // bookDatabase = buscar el libro con el isbn especificado en el body, si no existe no se puede reemplazar, 400 y error
  const bookDatabase = await Book.findOne({ isbn: req.body.isbn });
  if (!bookDatabase) {
    return res.status(400).json(
      { error: `El libro con isbn ${req.body.isbn} no existe` }
    )
  }

  // si se ha encontrado todo bien cogemos ese libro y sustituimos sus propiedades por las del que nos han pasado
  bookDatabase.name = req.body.name;
  bookDatabase.pages = req.body.pages;
  bookDatabase.fecha = req.body.fecha;

  // y ahora guardamos el libro, le devolvemos en la respuesta error vacío y lo que devuelve el save
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
  // pillamos el id de la url de la peticion
  const id = req.params.id;

  // intentamos borrar el libro que tiene ese id
  try {
    const deleteResponse = await Book.deleteOne({ _id: id });
    // si el libro con ese id ha sido borrado devolvemos que se ha borrado y a correr
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "book deleted"
      })
      return;
    }
  // si llegamos aqui es que no se ha borrado y es porque el libro no existe 
    res.status(404).json({ error: 'Book not found' });

  } catch (error) {
    // si llegamos aqui sera porque la bd ha dado error
    res.status(400).json({ error: error })
  }
});

export default router