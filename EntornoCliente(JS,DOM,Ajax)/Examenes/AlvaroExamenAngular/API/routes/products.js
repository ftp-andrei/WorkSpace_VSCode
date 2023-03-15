import express from 'express';
import Book from '../models/book.js';
import Joi from '@hapi/joi';
import Product from '../models/product.js';


// creamos un router 
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un libro, el nombre habria que cambiarlo en verdad (cambiado)
const schemaProduct = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().required().min(1),
    price: Joi.number().min(6).max(8).required(),
    fecha: Joi.date().required()
})

// especificamos cómo debe ser el objeto que venga de un libro que queremos añadir ya que el id lo mete mongo
const schemaAddProduct = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().required().min(1),
    price: Joi.number().min(6).max(8).required(),
    fecha: Joi.date().required()
})

const schemaUser = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    id: Joi.string().required(),
    dateCreation: Joi.date().required()
})

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            error: null,
            data: products
        });
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.post('/', async (req, res) => {
    // validamos que nos han mandado bien el objeto libro 
    const { error } = schemaAddProduct.validate(req.body);
    const { errorUser } = schemaUser.validate(req.user);
    const user = req.user;

    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    if (errorUser) {
        return res.status(400).json(
            { error: errorUser.details[0].message }
        )
    }

    // creamos el objeto libro
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        fecha: req.body.fecha,
        user: {
            Name: user.name,
            id: user.id,
            dateCreation: user.dateCreation
        }
    });
    // y lo insertamos en la bd
    try {
        const savedProduct = await product.save()
        res.json({
            error: null,
            data: savedProduct
        })
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (id != req.body.id) {
        return res.status(400).json(
            { error: `El id ${id} no coincide con el de body` }
        )
    }
    try {
        const product = await Product.findOne({ id: req.body.id });
        if (!product) {
            return res.status(400).json(
                { error: `El producta con id ${req.body.id} no existe` }
            )
        }
        // metemos los libros a la respuesta y todo correcto
        res.json({
            error: null,
            data: product
        });
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteResponse = await Product.deleteOne({ _id: id });
        if (deleteResponse.deletedCount == 1) {
            res.json({
                error: null,
                data: "Product deleted"
            })
            return;
        }
        // si llegamos aqui es que no se ha borrado y es porque el car no existe 
        res.status(404).json({ error: 'Product not found' });

    } catch (error) {
        // si llegamos aqui sera porque la bd ha dado error
        res.status(400).json({ error: error })
    }
});

export default router