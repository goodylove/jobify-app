import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Job from "./model/jobModel.js";
import User from "./model/userModel.js";

try {
  await mongoose.connect(process.env.MONGODB_URL);
  const user = await User.findOne({ email: "goodyc474@gmail.com" });
  const jsonJob = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const jobs = jsonJob.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log("success");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
