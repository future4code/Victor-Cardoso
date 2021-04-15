/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import signUpBusiness from '../../business/signUpBusiness';
import { SignUpInput, User } from '../../model/user';

const signUp = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const { email, userName, password, role } = req.body as SignUpInput;

    const token = await signUpBusiness({ email, userName, password, role });

    response = res.status(201).send({
      message: 'Success!',
      user: { email: email, role: role },
      token: token,
    });

    return response;
  } catch (err) {
    res.status(400).send({ status: 'Failed!', error: err.message });
  }
};

export default signUp;
