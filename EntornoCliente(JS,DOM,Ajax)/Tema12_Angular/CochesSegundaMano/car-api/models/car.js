import { Schema, model } from "mongoose";

const carSchema = Schema({
  marca: {
    type: String,
    require: true,
    min: 1,
    max: 30,
  },
  modelo: {
    type: String,
    require: true,
    min: 1,
    max: 50,
  },
  descripcion: {
    type: String,
    default: "",
    max: 255,
  },
  precio: {
    type: Number,
    require: true,
  },
  fecha: {
    type: Date,
    require: true,
  },
  imagen: {
    type: String,
    require: true,
  },
});

export default model("Car", carSchema);
