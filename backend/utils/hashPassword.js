import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log("error hashing password", error);
    throw error;
  }
};
