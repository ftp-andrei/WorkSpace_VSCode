import express from 'express';
import Car from '../models/car.js';
import Joi from '@hapi/joi';


// creamos un router 
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un Car
const schemaCar = Joi.object({
    _id: Joi.string().required(),
    marca: Joi.string().min(1).max(30).required(),
    modelo: Joi.string().required().min(1).max(50),
    precio: Joi.number().required(),
    fecha: Joi.date().required(),
    imagen: Joi.string().required(),
    descripcion: Joi.string().max(255),
})

// especificamos cómo debe ser el objeto que venga de un coche que queremos añadir ya que el id lo mete mongo
const schemaAddCar = Joi.object({
    marca: Joi.string().min(1).max(30).required(),
    modelo: Joi.string().required().min(1).max(50),
    precio: Joi.number().required(),
    fecha: Joi.date().required(),
    imagen: Joi.string().required(),
    descripcion: Joi.string().max(255),
})

router.get('/', async (req, res) => {
    try {
        // cars = pillar todos los coches, lo suyo seria poner un try catch supongo como abajo
        const cars = await Car.find();
        // metemos los coches a la respuesta y todo correcto
        res.json({
            error: null,
            data: cars
        });
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (id != req.body._id) {
        return res.status(400).json(
            { error: `El id ${id} no coincide con el de body` }
        )
    }
    try {
        const car = await Car.findOne({ _id: req.body._id });
        if (!car) {
            return res.status(400).json(
                { error: `El coche con id ${req.body._id} no existe` }
            )
        }
        // metemos los libros a la respuesta y todo correcto
        res.json({
            error: null,
            data: car
        });
    } catch (error) {
        res.status(400).json({ error: error })
    }

});

router.post('/', async (req, res) => {
    // validamos que nos han mandado bien el objeto libro 
    const { error } = schemaAddCar.validate(req.body)

    // si no error 400 y a correr
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    // creamos el objeto libro
    const car = new Car({
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        fecha: req.body.fecha,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
    });
    // y lo insertamos en la bd
    try {
        const savedCar = await car.save()
        res.json({
            error: null,
            data: savedCar
        })
    } catch (error) {
        res.status(400).json({ error: error })
    }
});



router.delete('/:id', async (req, res) => {
    // pillamos el id de la url de la peticion
    const id = req.params.id;

    // intentamos borrar el car que tiene ese id
    try {
        const deleteResponse = await Car.deleteOne({ _id: id });
        // si el car con ese id ha sido borrado devolvemos que se ha borrado y a correr
        if (deleteResponse.deletedCount == 1) {
            res.json({
                error: null,
                data: "car deleted"
            })
            return;
        }
        // si llegamos aqui es que no se ha borrado y es porque el car no existe 
        res.status(404).json({ error: 'car not found' });

    } catch (error) {
        // si llegamos aqui sera porque la bd ha dado error
        res.status(400).json({ error: error })
    }
});

export default router