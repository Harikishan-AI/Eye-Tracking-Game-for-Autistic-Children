import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

mongoose
  .connect(process.env.MONGODB_NEW_SERVER)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((error) => {
    console.log(error);
  });
