import { Request, Response } from 'express';
import deleteUserBusiness from '../../business/deleteUserBusiness';

const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const input = {
      id: req.params.id,
      token: req.headers.authorization!,
    };

    console.info('biz input', input);

    await deleteUserBusiness(input);

    return res.status(200).send({ message: 'Success!' });
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteUser;
