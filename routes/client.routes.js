import express from 'express';
import Client from "../models/client.model.js";

const clientRoutes = express.Router();

clientRoutes.get('/', (req, res) => {
    res.json({ message: "Hello World" })
})

// Add Employee
clientRoutes.route('/create').post((req, res, next) => {
    Client.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({ data, message: "Added Successfully" })
        }
    })
});

export default clientRoutes;