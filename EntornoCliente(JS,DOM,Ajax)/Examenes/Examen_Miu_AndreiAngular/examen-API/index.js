import express, { json, urlencoded } from "express";
import authRoutes from "./routes/auth.js";
import consultaRoutes from "./routes/consulta.js";
import { connect, mongoose } from "mongoose";
import dashboardRoutes from "./routes/dashboard.js";
import productRoutes from "./routes/products.js";
import verifyToken from "./routes/validate-token.js";
import cors from "cors";
import * as dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { addAbortSignal } from "stream";

// Conexion a mongoDB
const __dirname = dirname(fileURLToPath(import.meta.url));
mongoose.set("strictQuery", true);
dotenv.config({ path: `${__dirname}/.env` });
const uri = `mongodb://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.DBPORT}/${process.env.DBNAME}?authMechanism=DEFAULT`;
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
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

// Aqui deberia ir la conexion a Redis lo del client de redis.

const app = express();

app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.use("/api/products", verifyToken, productRoutes);
app.use("/api/consultas", consultaRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "My Auth Api Rest" });
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Tu servidor está corriendo en el puerto: ${PORT}`);
});
