import * as jwt from "jsonwebtoken";
import { AuthData } from "../types/authData";

const expiresIn = "30min";
const generateToken = (input: AuthData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};

export default generateToken;
