import { Schema, model } from "mongoose";

const mailSchema = Schema({
  nombre: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  asunto: {
    type: String,
    require: true,
  },
  mensaje: {
    type: String,
    require: true,
  },
});

export default model("Mail", mailSchema);
