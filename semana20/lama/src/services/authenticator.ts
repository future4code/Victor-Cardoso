import * as jwt from 'jsonwebtoken';
import { AuthData } from '../model/authData';
import { Payload } from '../model/payload';
import dotenv from 'dotenv';

dotenv.config();

export const getData = (token: string): AuthData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as Payload;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
};

export const generateToken = (input: AuthData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: '60min',
    }
  );
  return token;
};
