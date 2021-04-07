import * as jwt from "jsonwebtoken";
import { AuthData } from "../types/authData";

const expiresIn = "1min";
const generateToken = (input: AuthData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};

export default generateToken;
