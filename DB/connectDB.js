import mongoose from "mongoose";

async function ConnectDB(value) {
  try {
    await mongoose.connect(value);
    console.log("Connected to  database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default ConnectDB;
