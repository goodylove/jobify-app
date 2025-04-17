import { StatusCodes } from "http-status-codes";
import User from "../model/userModel.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { UnauthenticatedError } from "../errors/customError.js";
import { createJwt } from "../utils/tokenUtils.js";

export const Register = async (req, res) => {
  const firstUser = (await User.countDocuments()) === 0;
  req.body.role = firstUser ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);

  req.body.password = hashedPassword;
  const registerUser = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User created" });
};

export const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const userValid =
    user && (await comparePassword(req.body.password, user.password));

  if (!userValid) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const UserPayload = {
    userId: user._id,
    role: user.role,
  };
  const token = createJwt(UserPayload);
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "Production",
    expires: new Date(Date.now() + oneDay * 2),
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};
