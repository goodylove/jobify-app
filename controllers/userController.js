import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get currentUser" });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get currentUser" });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get currentUser" });
};
