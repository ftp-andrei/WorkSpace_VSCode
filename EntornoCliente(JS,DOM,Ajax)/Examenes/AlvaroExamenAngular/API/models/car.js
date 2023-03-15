import { Schema, model } from 'mongoose'

const userSchema = Schema({
    marca: {
        type: String,
        require: true,
        min: 1,
        max: 30
    },
    modelo: {
        type: String,
        require: true,
        min: 1,
        max: 50
    },
    precio: {
        type: Number,
        require: true,
    },
    fecha: {
        type: Date,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        default:'',
        max: 255
    }
})

export default model('Car', userSchema)