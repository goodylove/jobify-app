import mongoose from "mongoose";

const JobScheme = mongoose.Schema({
  company: String,
  position: String,
  jobStatus: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  jobType: {
    type: String,
    enum: ["full-time"],
  },
});

export default mongoose.model("Jobs", JobScheme);
