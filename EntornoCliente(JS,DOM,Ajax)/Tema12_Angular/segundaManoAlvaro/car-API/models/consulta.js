import { Schema, model } from 'mongoose'

const userSchema = Schema({
    nombre: {
        type: String,
        require: true,
        min: 2,
        max: 30
    },
    email: {
        type: String,
        require: true,
        min: 6,
        max: 40
    },
    asunto: {
        type: String,
        require: true,
        min: 4,
        max:30
    },
    mensaje: {
        type: String,
        require: true,
        max: 255
    },
    fecha:{
        type: Date,
        default: Date.now
    }
})

export default model('Consulta', userSchema)