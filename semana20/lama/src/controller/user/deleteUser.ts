import { Request, Response } from 'express';
import deleteUserBusiness from '../../business/user/deleteUserBusiness';

const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const input = {
      id: req.params.id,
      token: req.headers.authorization!,
    };
    await deleteUserBusiness(input);

    return res.status(200).send({ message: 'Success!' });
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteUser;
