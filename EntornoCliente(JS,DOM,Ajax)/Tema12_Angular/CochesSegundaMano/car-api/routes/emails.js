import express from "express";
import Email from "../models/email.js";
import Joi from "@hapi/joi";

// creamos un router
const router = express.Router();

// especificamos cómo debe ser el objeto que venga de un coche que queremos añadir ya que el id lo mete mongo
const schemaAddEmail = Joi.object({
  nombre: Joi.string().min(2).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .min(6)
    .max(40),
  asunto: Joi.string().required().min(4).max(30),
  mensaje: Joi.string().required().max(255),
  fecha: Joi.date(),
});
// Devuelve todos los emails
router.get("/", async (req, res) => {
  try {
    const emails = await Email.find();
    res.json({
      error: null,
      data: emails,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// Crea un email
router.post("/", async (req, res) => {
  const { error } = schemaAddEmail.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const email = new Email({
    nombre: req.body.nombre,
    email: req.body.email,
    asunto: req.body.asunto,
    mensaje: req.body.mensaje,
    fecha: req.body.fecha,
  });
  try {
    const savedEmail = await email.save();
    res.json({
      error: null,
      data: savedEmail,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
