import mongoose from "mongoose";

const Schema = mongoose.Schema;

const codeSchema = new Schema ({
  gameCode: String,
  name: String,
  rating: String
});

const GameInfo = mongoose.model('GameInfo', codeSchema);

export default GameInfo;
