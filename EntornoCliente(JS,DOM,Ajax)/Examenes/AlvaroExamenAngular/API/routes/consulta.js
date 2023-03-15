import express from 'express';
import Consulta from '../models/consulta.js';
import Joi from '@hapi/joi';


// creamos un router 
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un Car
const schemaConsulta = Joi.object({
    _id: Joi.string().required(),
    nombre: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required().min(6).max(40),
    asunto: Joi.string().required().min(4).max(30),
    mensaje: Joi.string().required().max(255),
    fecha: Joi.date(),
})

// especificamos cómo debe ser el objeto que venga de un coche que queremos añadir ya que el id lo mete mongo
const schemaAddConsulta = Joi.object({
    nombre: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required().min(6).max(40),
    asunto: Joi.string().required().min(4).max(30),
    mensaje: Joi.string().required().max(255),
    fecha: Joi.date(),
})

router.get('/', async (req, res) => {
    try {
        const consultas = await Consulta.find();
        res.json({
            error: null,
            data: consultas
        });
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.post('/', async (req, res) => {
    const { error } = schemaAddConsulta.validate(req.body)

    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    const consulta = new Consulta({
        nombre: req.body.nombre,
        email: req.body.email,
        asunto: req.body.asunto,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha,
    });
    try {
        const savedConsulta = await consulta.save()
        res.json({
            error: null,
            data: savedConsulta
        })
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// router.put('/:id', async (req, res) => {
//     // id = al id que viene en la url de consulta
//     const id = req.params.id;
//     // error = si hay error en la estructura del objeto que se manda en el body 
//     const { error } = schemaBook.validate(req.body)

//     // si hay error devuelves una respuesta status 400 con el error
//     if (error) {
//         return res.status(400).json(
//             { error: error.details[0].message }
//         )
//     }

//     // si el id que viene en la url no es el mismo que el del body del libro a modificar error400 y el error
//     if (id != req.body._id) {
//         return res.status(400).json(
//             { error: `El id ${id} no coincide con el de body` }
//         )
//     }

//     // bookDatabase = buscar el libro con el isbn especificado en el body, si no existe no se puede reemplazar, 400 y error
//     const bookDatabase = await Book.findOne({ isbn: req.body.isbn });
//     if (!bookDatabase) {
//         return res.status(400).json(
//             { error: `El libro con isbn ${req.body.isbn} no existe` }
//         )
//     }

//     // si se ha encontrado todo bien cogemos ese libro y sustituimos sus propiedades por las del que nos han pasado
//     bookDatabase.name = req.body.name;
//     bookDatabase.pages = req.body.pages;
//     bookDatabase.fecha = req.body.fecha;

//     // y ahora guardamos el libro, le devolvemos en la respuesta error vacío y lo que devuelve el save
//     try {
//         const savedBook = await bookDatabase.save();

//         res.json({
//             error: null,
//             data: savedBook
//         })
//     } catch (error) {
//         res.status(400).json({ error: error })
//     }
// });

// router.delete('/:id', async (req, res) => {
//     // pillamos el id de la url de la peticion
//     const id = req.params.id;

//     // intentamos borrar el libro que tiene ese id
//     try {
//         const deleteResponse = await Book.deleteOne({ _id: id });
//         // si el libro con ese id ha sido borrado devolvemos que se ha borrado y a correr
//         if (deleteResponse.deletedCount == 1) {
//             res.json({
//                 error: null,
//                 data: "book deleted"
//             })
//             return;
//         }
//         // si llegamos aqui es que no se ha borrado y es porque el libro no existe 
//         res.status(404).json({ error: 'Book not found' });

//     } catch (error) {
//         // si llegamos aqui sera porque la bd ha dado error
//         res.status(400).json({ error: error })
//     }
// });

export default router