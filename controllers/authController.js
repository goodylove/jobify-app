import { StatusCodes } from "http-status-codes";
import User from "../model/userModel.js";
import { hashPassword } from "../utils/hashPassword.js";

export const Register = async (req, res) => {
  const firstUser = (await User.countDocuments()) === 0;
  req.body.role = firstUser ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);

  req.body.password = hashedPassword;
  const registerUser = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User created" });
};

export const Login = async (req, res) => {
  res.status(StatusCodes.CREATED).send("login");
};
