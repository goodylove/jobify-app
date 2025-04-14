import { StatusCodes } from "http-status-codes";
import User from "../model/jobModel.js";

export const Register = async (req, res) => {
  const registerUser = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ registerUser });
};

export const Login = async (req, res) => {
  res.status(StatusCodes.CREATED).send("login");
};
