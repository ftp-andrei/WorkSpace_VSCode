import express, { json, urlencoded } from 'express'
import authRoutes from './routes/auth.js'
import carRoutes from './routes/car.js'
import consultaRoutes from './routes/consulta.js'
import { connect, mongoose } from 'mongoose'
import dashboardRoutes from './routes/dashboard.js'
import booksRoutes from './routes/books.js'
import verifyToken from './routes/validate-token.js'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import redis from 'redis';
import carsRedisRouter from './routes/carsRedis.js';
import mongoErrorsRouter from './routes/mongoErrors.js';
import userRoutes from './routes/user.js';
import productRoutes from './routes/products.js';

const app = express();


// Conexion a mongoDB
const __dirname = dirname(fileURLToPath(import.meta.url));
mongoose.set('strictQuery', true);
dotenv.config({ path: `${__dirname}/.env` });
const uri = `mongodb://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.DBPORT}/${process.env.DBNAME}?authMechanism=DEFAULT`;
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log('Database error', e)
  })

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// middlewares

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: false }));

// AQUI SE LE DICE A LA app QUE USE UN ENDPOINT Y DONDE ESTAN LOS METODOS, HAY QUE IMPORTAR TODOS LOS algoRouter ARRIBA desde routes
// estos cambiaran en su implementación, algunos seran con mongo como estos y otros seran en redis lo que requerira un routes y un service
// app.use('/api/user', authRoutes);
// el verifyToken se encarga de que sea una API autenticada y pida el token 
// app.use('/api/dashboard', verifyToken, dashboardRoutes);
// app.use('/api/books', verifyToken, booksRoutes);
// app.use('/api/cars', carRoutes);
// app.use('/api/consultas', consultaRoutes);
// app.use('/api/carsRedis/', verifyToken, carsRedisRouter);

app.use('/users', userRoutes);
app.use('/products',verifyToken, productRoutes);
app.use('/log', mongoErrorsRouter);


app.get('/', (req, res) => {
  res.json({ mensaje: 'My Auth Api Rest' })
})

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Tu servidor está corriendo en el puerto: ${PORT}`)
})
