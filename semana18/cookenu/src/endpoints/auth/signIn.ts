import { Request, Response } from 'express';
import { generateToken } from '../../services/authenticator';
import { LoginData, User } from '../../types/user';
import { compare } from '../../services/hash';
import queryUserByEmail from '../../data/queryUserByEmail';

const signIn = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const { email, password }: LoginData = req.body;
    const user: User = await queryUserByEmail(email);
    const compareResult = await compare(password, user.password);
    const token = generateToken({
      id: user.id,
    });
    let response = res;

    if (!email || !password) {
      throw new Error('Please fill all the fields.');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email.');
    }
    if (!compareResult) {
      throw new Error("Passwords hash don't match.");
    }

    response = res
      .status(200)
      .send({ status: 'Success!', user: user.email, token: token });

    return response;
  } catch (err) {
    res.status(400).send({ status: 'Failed!', message: err.message });
  }
};

export default signIn;
