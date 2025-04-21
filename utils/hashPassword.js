import bcryptjs from "bcryptjs";

export async function hashPassword(password) {
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);
  return hashPassword;
}

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcryptjs.compare(password, hashedPassword);
  return isMatch;
};
