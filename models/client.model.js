import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Client = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    birthDay: Date,
    city: String,
    gender: String,
    hobbies: Array,
  },
  {
    collection: "clients",
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export default mongoose.model("Client", Client);
