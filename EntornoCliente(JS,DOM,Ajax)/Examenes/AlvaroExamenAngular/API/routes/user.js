"use strict"
import express from 'express';
import User from '../models/user.js'
import Joi from '@hapi/joi'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router();


// -------------------------- ESTRUCTURA QUE DEBE TENER UN OBJETO USUARIO PARA REGISTRARSE --------------------------

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    admin: Joi.min(6).max(1024).required()
})

// -------------------------- ESTRUCTURA QUE DEBE TENER UN OBJETO USUARIO PARA LOGEARSE ------------------------------
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

// LOGIN
router.post('/login', async (req, res) => {
    // Validaciones de login, ver si se ajusta al joi, si hay error fuera
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Validacion y existencia, vemos si existe usuario con ese mail, si hay error fuera
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    // Validacion de password en la base de datos, comparamos contraseñas, si no coinciden error y fuera
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).json({ error: 'Constraseña invalida' });

    // Creando token, si coinciden creamos el token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET);

    // Colocando el token en el header y el cuerpo de la respuesta
    res.header('Authorization', token).json({
        token: { token },
        admin: user.admin
    })
})


// REGISTER
router.post('/register', async (req, res) => {
    // validamos los datos de registro con joi
    const { error } = schemaRegister.validate(req.body);

    // si hay errores fuera
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        );
    }

    // miramos si existe ya el mail que nos han dado error
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json(
            { error: `El email ${req.body.email} ya está registrado.` }
        );
    }

    // generamos el salt para generar el pwd encriptado con bcrypt
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // creamos el objeto usuario de acuerdo a lo especificado en models
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    
    // y lo metemos a la base de datos
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        });
    } catch (error) {
        res.status(400).json({ error });
    }
})

export default router