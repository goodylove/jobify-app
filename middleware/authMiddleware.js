import {
  BadRequestError,
  UnauthenticatedError,
  Unauthorized,
} from "../errors/customError.js";
import { verifyJwt } from "../utils/tokenUtils.js";

export function authMiddleware(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("Unauthorized user");
  }
  try {
    const { userId, role } = verifyJwt(token);
    // const testUser = (userId = "hhhhhhrhhr");
    // testUser;
    req.user = { userId, role };
    next();
  } catch (err) {
    throw new UnauthenticatedError("authentication Failed");
  }
}

export const authorizedPermission = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      throw new Unauthorized(" not authorized to access this route");
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo user. Read Only");
  next();
};
