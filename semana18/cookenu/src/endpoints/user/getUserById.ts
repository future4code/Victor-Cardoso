import { Request, Response } from 'express';
import queryUserById from '../../data/queryUserById';
import { getData } from '../../services/authenticator';

const getUserById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;
    const userId = req.params.id as string;
    let response = res;
    getData(token);

    if (!userId) {
      response = res.status(404).send({ message: 'User Id not found.' });
    }

    const user = await queryUserById(userId);

    response = res.status(200).send({
      message: 'Success!',
      user: { id: user.id, name: user.userName, email: user.email },
    });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default getUserById;
