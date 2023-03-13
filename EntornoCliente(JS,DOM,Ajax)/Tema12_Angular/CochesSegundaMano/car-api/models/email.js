import { Schema, model } from "mongoose";

const contactoSchema = Schema({
  nombre: {
    type: String,
    require: true,
    min: 1,
    max: 30,
  },
  email: {
    type: String,
    require: true,
    min: 1,
    max: 50,
  },
  asunto: {
    type: String,
    require: true,
    min: 4,
    max: 30,
  },
  mensaje: {
    type: String,
    require: true,
    max: 255,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export default model("Email", contactoSchema);
