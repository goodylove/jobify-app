import { StatusCodes } from "http-status-codes";
import User from "../model/userModel.js";
import Jobs from "../model/jobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const user = await User.countDocuments();
  const jobs = await Jobs.countDocuments();
  res.status(StatusCodes.OK).json({ user, jobs });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  const updateUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "Update user" });
};
