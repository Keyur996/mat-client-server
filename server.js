import express from "express";
import cors from "cors";
import clientRoutes from "./routes/client.routes.js";
import morgan from "morgan";
import dotEnv from "dotenv";
import { connection } from "./db/connection.js";
// import chalk from "chalk";
// import path from "path";
dotEnv.config();

// Connect To mongoose
connection();

// Setting up middleware
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", clientRoutes);

// server listen
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server is Running on ${port}`)
);

// error handler middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
