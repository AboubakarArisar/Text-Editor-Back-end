import mongoose from "mongoose";
import { MONGO_URI } from "./config/config";
const connectionString = MONGO_URI || "";
const connect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connect;
