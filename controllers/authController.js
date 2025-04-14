import { StatusCodes } from "http-status-codes";

export const Register = async (req, res) => {
  res.status(StatusCodes.CREATED).send("Registered");
};

export const Login = async (req, res) => {
  res.status(StatusCodes.CREATED).send("login");
};
