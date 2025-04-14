import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  name: String,
  email: String,
  lastName: {
    type: String,
    default: "LastName",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("User", UserModel);
