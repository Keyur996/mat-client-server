import express from "express";
import cors from "cors";
import clientRoutes from "./routes/client.routes.js";
import morgan from "morgan";
import dotEnv from "dotenv";
import { connection } from "./db/connection.js";
import morgan from "morgan";
// import chalk from "chalk";
// import path from "path";
dotEnv.config();

// Connect To mongoose
connection();

// Setting up middleware
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", clientRoutes);

// server listen
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server is Running on ${port}`)
);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).json({ message: err.message }); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
