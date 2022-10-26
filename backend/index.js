//Importar paquetes
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

//Config vars
const PORT = process.env.PORT || 4000;
const DB = process.env.DB || "mongodb://127.0.0.1/trivia";

//Conectarse a la DB
mongoose.connect(DB)
  .then(() => console.log('Base de datos conectada en ' + DB))
  .catch(err => console.error(err));

//Instanciar la app
const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

import gameRouter from "./routes/game.js";
app.use('/site', gameRouter);

import userRouter from "./routes/user.js";
app.use('/site', userRouter);


app.listen(PORT, () => console.log("Servidor escuchando en puerto " + PORT));
