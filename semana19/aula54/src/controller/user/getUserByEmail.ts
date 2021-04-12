import { Request, Response } from 'express';
import queryUserByEmail from '../../data/queryUserByEmail';

const getUserByEmail = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const email = req.params.email;
    const user = await queryUserByEmail(email);
    let response = res;

    if (!email.includes('@')) {
      throw new Error('Invalid email.');
    }
    response = res.status(200).send({
      message: 'Success!',
      user: { id: user.id, name: user.userName, email: user.email },
    });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default getUserByEmail;
