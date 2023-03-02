import express from "express";
const router = express.Router();
// Esto para crear rutas
router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Esta es una ruta protegida",
      user: req.user,
    },
  });
});

export default router;
