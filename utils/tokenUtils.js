import jwt from "jsonwebtoken";

export function createJwt(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
}
export function verifyJwt(payload) {
  const verifyToken = jwt.verify(payload, process.env.JWT_SECRET);
  return verifyToken;
}
