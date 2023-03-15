import { Schema, model } from 'mongoose'
import user from './user'

const productSchema = Schema({
    id: {
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    name: {
        type: String,
        require: true,
        min: 6,
        max: 40
    },
    description: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    price: {
        type: Number,
        require: true
    },
    user: {
        type: user,
        require: true
    }
})

export default model('Product', productSchema)