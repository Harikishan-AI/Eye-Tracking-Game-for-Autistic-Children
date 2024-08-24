import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

const stopWatchSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  time: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stopwatch",
  },
});

export const playerModel = new mongoose.model("User", playerSchema);
export const stopwatchModel = new mongoose.model("Stopwatch", stopWatchSchema);
