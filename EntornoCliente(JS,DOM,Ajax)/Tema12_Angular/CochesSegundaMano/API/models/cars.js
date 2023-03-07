import { Schema, model } from "mongoose";

const carSchema = Schema({
  marca: {
    type: String,
    require: true,
    min: 6,
    max: 255,
  },
  modelo: {
    type: String,
    require: true,
    min: 6,
    max: 255,
  },
  fecha: {
    type: Date,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
    min: 1,
  },
  img: {
    type: String,
    require: true,
    min: 1,
  },
});

export default model("Car", carSchema);
