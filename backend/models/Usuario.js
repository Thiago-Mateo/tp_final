import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userDataSchema = new Schema ({
    name: String,
    surName: String,
    steamAccount: String,
    age: Number
  });

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;