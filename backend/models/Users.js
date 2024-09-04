import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  number: Number,
  role: String,
  address: String,
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
