import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../types/user";
import getData from "../utils/getData";

const getUserProfile = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const token = req.headers.authorization as string;
    const authData = getData(token);
    const user = await queryUserById(authData.id);

    if (user.role !== "NORMAL") {
      response = res.status(401).send({ message: "Access denied." });
    } else {
      response = res.status(200).send({
        message: "Success!",
        user: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const queryUserById = async (userId: string): Promise<User> => {
  const result = await connection("User50").select("*").where({ id: userId });

  return result[0];
};

export default getUserProfile;
