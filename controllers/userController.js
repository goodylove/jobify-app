import { StatusCodes } from "http-status-codes";
import User from "../model/userModel.js";
import Jobs from "../model/jobModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import { formateImage } from "../middleware/multerMiddleware.js";

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
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formateImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    // await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updateUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updateUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "Update user" });
};
