import express from "express";
import Mail from "../models/mail.js";
import Joi from "@hapi/joi";

const router = express.Router();

const schemaAddRegister = Joi.object({
  nombre: Joi.string().required(),
  email: Joi.string().required(),
  asunto: Joi.string().required(),
  mensaje: Joi.string().required(),
});

router.get("/", async (req, res) => {
  const mails = await Mail.find();
  res.json({
    error: null,
    data: mails,
  });
});

router.post("/", async (req, res) => {
  const { error } = schemaAddRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const mail = new Mail({
    nombre: req.body.nombre,
    email: req.body.email,
    asunto: req.body.asunto,
    mensaje: req.body.mensaje,
  });
  try {
    const savedMail = await mail.save();
    res.json({
      error: null,
      data: savedMail,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteResponse = await Mail.deleteOne({ _id: id });
    if (deleteResponse.deletedCount == 1) {
      res.json({
        error: null,
        data: "mail deleted",
      });
      return;
    }
    res.status(404).json({ error: "Mail not found" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
