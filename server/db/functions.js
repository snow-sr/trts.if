import mongoose from "mongoose";
import "dotenv/config";
let mongoUri = process.env.URI;

mongoose.connect(mongoUri);

mongoose.Connection.on("Open", () => {
  console.log("Connected to MongoDB");
});
