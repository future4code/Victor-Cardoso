import { Request, Response } from 'express';
import { getData } from '../../services/authenticator';
import queryUserById from '../../data/user/queryUserById';

const getUserProfile = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;
    const authData = getData(token);
    const user = await queryUserById(authData.id);
    let response = res;

    if (user) {
      response = res.status(200).send({
        message: 'Success!',
        userProfile: {
          id: user.id,
          userName: user.name,
          email: user.email,
        },
      });
    }

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default getUserProfile;
