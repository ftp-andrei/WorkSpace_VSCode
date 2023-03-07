import { Schema, model } from "mongoose";

const productSchema = Schema({
  name: {
    type: String,
    require: true,
    min: 6,
    max: 255,
  },
  desc: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
});

export default model("product", productSchema);
