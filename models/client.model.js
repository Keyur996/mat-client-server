import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Client = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    birthDay: { type: Date },
    city: { type: String },
    gender: { type: String },
    hobbies: { type: Array }
}, { collection: 'clients' })

export default mongoose.model('Client', Client);