import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String,
        require: true,
        min: 2,
        max: 255
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    dateCreation: {
        type: Date,
        default: new Date()
    },
    admin: {
        type: Boolean,
        require: true
    }
})

export default model('User', userSchema)