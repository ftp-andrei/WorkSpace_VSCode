import express, { json, urlencoded } from "express";
import authRoutes from "./routes/auth.js";
import { connect, mongoose } from "mongoose";
import dashboardRoutes from "./routes/dashboard.js";
import booksRoutes from "./routes/books.js";
import verifyToken from "./routes/validate-token.js";
import cors from "cors";
import * as dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@free-cluster.saw1r.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((e) => {
    console.log("Database error", e);
  });

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: false }));
// Aqui se ponen las rutas, y se verifican con el dashboard
app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.use("/api/book", verifyToken, booksRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "My Auth Api Rest" });
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Tu servidor está corriendo en el puerto: ${PORT}`);
});
