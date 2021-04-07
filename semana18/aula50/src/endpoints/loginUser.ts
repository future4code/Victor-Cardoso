import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/token";
import { User } from "../types/user";

const loginUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const userEmail: string = req.body.email;
    const userData = {
      email: userEmail,
      password: req.body.password,
    };

    const user = await queryUserByEmail(userEmail);

    const token = generateToken({
      id: user.id,
    });

    let response = res;

    if (!userEmail || !userEmail.includes("@")) {
      response = res.status(400).send({ message: "Invalid email." });
    } else if (user.password !== userData.password) {
      response = res.status(400).send({ message: "Passwords don't match." });
    } else {
      response = res.status(200).send({ message: "Success!", token: token });
    }

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const queryUserByEmail = async (email: string): Promise<User> => {
  const result = await connection("User50").select("*").where({ email });

  return result[0];
};

export default loginUser;
