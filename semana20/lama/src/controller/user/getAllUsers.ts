import { Request, Response } from 'express';
import getUsersBusiness from '../../business/user/getUsersBusiness';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization!;
    const users = await getUsersBusiness(token);

    return res.send(users).status(200);
  } catch (error) {
    throw new Error(error.message);
  }
};
export default getAllUsers;
