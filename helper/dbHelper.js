import mongoose from "mongoose";
import constants from "../constants/index.js";

export const formatMongoData = (data) => {
  if (Array.isArray(data)) {
    let newDataList = [];
    for (let value of data) {
      newDataList.push(value.toObject());
    }
    return newDataList;
  }
  return data.toObject();
};

export const checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databaseMessage.INVALID_ID);
  }
};
