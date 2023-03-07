import { Schema, model } from "mongoose";

const carSchema = Schema({
  img: {
    type: String,
    require: true,
  },
  marca: {
    type: String,
    require: true,
  },
  modelo: {
    type: String,
    require: true,
  },
  year: {
    type: Date,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
  },
});

export default model("Car", carSchema);
