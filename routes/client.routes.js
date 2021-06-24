import express from "express";
import * as clientController from "./../controllers/clientController.js";

const clientRoutes = express.Router();

// get All clients from MongoDB
clientRoutes.get("/clients", clientController.getAllClients);

// Add Employee
clientRoutes.post("/client", clientController.createClient);

// get Client By id
clientRoutes.get("/client/:id", clientController.getClientById);

//update client
clientRoutes.put("/client/:id", clientController.updateClient);

// delete client
clientRoutes.delete("/client/:id", clientController.deleteClient);

export default clientRoutes;
