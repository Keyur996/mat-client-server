import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import clientRoutes from "./routes/client.routes.js";
import { dbConfig } from "./database/db.js";
import path from "path";

// Connect To mongoose
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database sucessfully connected'))
    .catch(err => console.log(err));

// Setting up middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", clientRoutes);

// server listen
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Server is Running on ${port}`));

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

