import * as jwt from 'jsonwebtoken';
import { AuthData } from '../types/authData';
import { Payload } from '../types/payload';
import dotenv from 'dotenv';

dotenv.config();

export const getData = (token: string): AuthData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as Payload;
  const result = {
    id: payload.id,
  };
  return result;
};

export const generateToken = (input: AuthData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: '60min',
    }
  );
  return token;
};
