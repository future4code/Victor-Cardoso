import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../types/user";
import getData from "../utils/getData";

const getUserById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;

    const authData = getData(token);

    const user = await queryUserById(authData.id);

    const userData = {
      id: user.id,
      email: user.email,
    };

    const response = res
      .status(200)
      .send({ message: "Success!", user: userData });
    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const queryUserById = async (userId: string): Promise<User> => {
  const result = await connection("User50").select("*").where({ id: userId });

  return result[0];
};

export default getUserById;
