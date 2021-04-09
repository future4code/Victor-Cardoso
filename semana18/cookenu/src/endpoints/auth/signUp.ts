/* eslint-disable @typescript-eslint/no-explicit-any */
import { hash } from '../../services/hash';
import { Request, Response } from 'express';
import connection from '../../connection';
import { generateToken } from '../../services/authenticator';
import { User } from '../../types/user';
import createId from '../../services/idGen';

const signUp = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const id = createId() as string;
    const { email, userName, password } = req.body;
    const hashPassword = await hash(password);
    const user: User = {
      id: id,
      email: email,
      userName: userName,
      password: hashPassword,
    };

    if (!email || !password || !userName) {
      throw new Error('Please fill all the fields.');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email.');
    }
    if (req.body.password.length < 6) {
      throw new Error('Password must have at least 6 characters.');
    }

    await insertUser(user.id, user.email, user.userName, user.password);

    const token = generateToken({ id });

    response = res.status(201).send({
      message: 'Success!',
      user: { id: user.id, email: user.email, name: user.userName },
      token: token,
    });

    return response;
  } catch (err) {
    res.status(400).send({ status: 'Failed!', error: err.message });
  }
};

const insertUser = async (
  id: string,
  email: string,
  userName: string,
  password: string
) => {
  const result = await connection
    .insert({
      id,
      email: email,
      userName: userName,
      password: password,
    })
    .into('User');

  return result[0];
};

export default signUp;
