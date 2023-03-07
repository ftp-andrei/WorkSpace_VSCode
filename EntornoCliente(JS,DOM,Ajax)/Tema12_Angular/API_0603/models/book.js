
import { Schema, model } from 'mongoose'

const bookSchema = Schema({
  name: {
    type: String,
    require: true,
    min: 6,
    max: 255
  },
  pages: {
    type: Number,
    require: true,
    min: 1
  },
  isbn: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 8
  },
  fecha: {
    type: Date,
    require: true,
  }
})

export default model('Book', bookSchema)