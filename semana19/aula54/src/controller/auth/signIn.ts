import { Request, Response } from 'express';
import { LoginData, User } from '../../model/user';
import signInBusiness from '../../business/signInBusiness';

const signIn = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const { email, password }: LoginData = req.body;

    let response = res;

    const token: string = await signInBusiness({ email, password });

    response = res
      .status(200)
      .send({ status: 'Success!', user: email, token: token });

    return response;
  } catch (err) {
    res.status(400).send({ status: 'Failed!', message: err.message });
  }
};

export default signIn;
