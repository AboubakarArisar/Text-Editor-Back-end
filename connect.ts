import mongoose, { connection } from "mongoose";

const connect = async () => {
  try {
    const connectionString = process.env.MONGO_URI || "connectionstring";
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connect;
