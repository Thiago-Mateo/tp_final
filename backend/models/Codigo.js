import mongoose from "mongoose";

const Schema = mongoose.Schema;

const codeSchema = new Schema ({
  gameCode: String,
  name: String,
  rating: String
});

const userDataSchema = new Schema ({
  name: String,
  surName: String,
  steamAccount: String,
  age: Number,
  game: [codeSchema]
});

const GameInfo = mongoose.model('GameInfo', codeSchema);
const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;
export default GameInfo;
