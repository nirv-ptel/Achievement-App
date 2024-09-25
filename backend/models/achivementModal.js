import mongoose from "mongoose";

const achivementSchema = new mongoose.Schema({
  image: String,
});

const AchivementModal = mongoose.model("achivement", achivementSchema);

export default AchivementModal;
