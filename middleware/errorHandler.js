import { StatusCodes } from "http-status-codes";

function ErrorHandlerMiddleware(err, req, res, next) {
  const message = err.message || "internal server error";
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({ message });
}

export default ErrorHandlerMiddleware;
