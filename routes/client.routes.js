import express from 'express';
import Client from "../models/client.model.js";
const clientRoutes = express.Router();

// get All clients from MongoDB
clientRoutes.route('/').get((req, res) => {
    Client.find((err, data) => {
        if (err) res.status(404).json({ data: null, message: err.message });
        else res.status(200).json({ data, message: "All Clients" });
    })
})

// Add Employee
clientRoutes.route('/create').post((req, res) => {
    Client.create(req.body, (error, data) => {
        if (error) {
            res.status(404).json({ data: null, message: err.message })
        } else {
            res.status(200).json({ data, message: "Added Successfully" })
        }
    })
});

clientRoutes.route("/read/:id").get((req, res) => {
    Client.findById(req.params.id, (err, data) => {
        if (err) res.status(404).json({ data: null, message: err.message });
        else res.status(200).json({ data, message: "Client received" });
    })
});

clientRoutes.route('/update/:id').put((req, res,) => {
    Client.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            res.status(404).json({ data: null, message: err.message });
        } else {
            res.status(200).json({ data, message: 'Data updated successfully' })
        }
    })
});

clientRoutes.route('/delete/:id').delete((req, res) => {
    Client.findOneAndRemove(req.params.id, (err, data) => {
        if (err) res.status(404).json({ message: err.message });
        else res.status(200).json({ msg: 'Data Deleted' })
    })
})

export default clientRoutes;