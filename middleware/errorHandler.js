import { StatusCodes } from "http-status-codes";

function ErrorHandlerMiddleware(err, req, res, next) {
  let customErr = {
    message: err.message || "internal server error",
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR || 500,
  };

  if ((err.name = "CastError")) {
    customErr.message = "";
    customErr.statusCode = StatusCodes.NOT_FOUND;
  }

  res.status(customErr.statusCode).json({ msg: customErr.message, data: null });
}

export default ErrorHandlerMiddleware;
