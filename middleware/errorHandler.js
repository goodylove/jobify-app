import { StatusCodes } from "http-status-codes";

function ErrorHandlerMiddleware(err, req, res, next) {
  let customErr = {
    message: err.message || "internal server error",
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR || 500,
  };

  if ((err.name = "CastError")) {
    customErr.message = "Invalid Id";
    customErr.statusCode = StatusCodes.BAD_REQUEST;
  }

  if ((err.name = "validationError")) {
    customErr.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  if (err.code && err.code == 11000) {
    customErr.message = "Duplicate Entry";
    customErr.statusCode = StatusCodes.CONFLICT;
  }

  return res
    .status(customErr.statusCode)
    .json({ msg: customErr.message, data: null });
}

export default ErrorHandlerMiddleware;
