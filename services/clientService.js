import constants from "../constants/index.js";
import { checkObjectId, formatMongoData } from "../helper/dbHelper.js";
import Client from "./../models/client.model.js";

export const getAllClients = async () => {
  try {
    let clients = await Client.find({});
    return formatMongoData(clients);
  } catch (error) {
    console.log("Something went wrong: Service: getAllClients", error);
    throw new Error(error);
  }
};

export const createClient = async (serviceData) => {
  try {
    let client = new Client({ ...serviceData });
    let result = await client.save();
    return formatMongoData(result);
  } catch (error) {
    console.log("Something went wrong: Service: createClient", error);
    throw new Error(error);
  }
};

export const getClientById = async ({ id }) => {
  try {
    checkObjectId(id);
    let client = await Client.findById(id);
    if (!client) {
      throw new Error(constants.clientMessages.CLIENT_NOT_FOUND);
    }
    return formatMongoData(client);
  } catch (error) {
    console.log("Something went wrong: Service: getClientById", error);
    throw new Error(error);
  }
};

export const updateClient = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let client = await Client.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!client) {
      throw new Error(constants.clientMessages.CLIENT_NOT_FOUND);
    }
    return formatMongoData(client);
  } catch (error) {
    console.log("Something went wrong: Service: updateClient", error);
    throw new Error(error);
  }
};

export const deleteClient = async ({ id }) => {
  try {
    checkObjectId(id);
    let client = await Client.findByIdAndDelete(id);
    if (!client) {
      throw new Error(constants.clientMessages.CLIENT_NOT_FOUND);
    }
    return formatMongoData(client);
  } catch (error) {
    console.log("Something went wrong: Service: deleteClient", error);
    throw new Error(error);
  }
};
