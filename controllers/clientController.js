import constants from "../constants/index.js";
import * as clientService from "../services/clientService.js";

export const getAllClients = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const resFromService = await clientService.getAllClients();
    response.status = 200;
    response.message = constants.clientMessages.CLIENTS_FETCHED;
    response.body = resFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: getAllClients", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

export const createClient = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const resFromService = await clientService.createClient(req.body);
    response.status = 200;
    response.message = constants.clientMessages.CLIENT_CREATED;
    response.body = resFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createClient", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

export const getClientById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const resFromService = await clientService.getClientById(req.params);
    response.status = 200;
    response.message = constants.clientMessages.CLIENT_FETCHED;
    response.body = resFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: getClientById", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

export const updateClient = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const resFromService = await clientService.updateClient({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = constants.clientMessages.CLIENT_UPDATED;
    response.body = resFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: updateClient", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

export const deleteClient = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const resFromService = await clientService.deleteClient(req.params);
    response.status = 200;
    response.message = constants.clientMessages.CLIENT_DELETED;
    response.body = resFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: deleteClient", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
