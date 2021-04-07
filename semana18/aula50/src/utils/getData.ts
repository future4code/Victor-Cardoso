import * as jwt from "jsonwebtoken";
import { AuthData } from "../types/authData";
import { Payload } from "../types/payload";

const getData = (token: string): AuthData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as Payload;
  const result = {
    id: payload.id,
  };
  return result;
};

export default getData;
