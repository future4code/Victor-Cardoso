import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/token";
import { LoginCreds, User } from "../types/user";
import { compare } from "../services/hash";

const loginUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const { email, password }: LoginCreds = req.body;
    const user = await queryUserByEmail(email);
    const hashCompare = await compare(password, user.password);
    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    if (!email.includes("@")) {
      response = res.status(401).send({ message: "Invalid email." });
    } else if (!email || !password) {
      response = res
        .status(422)
        .send({ message: "Email and password cannot be empty." });
    } else if (!hashCompare) {
      response = res.status(401).send({ message: "Passwords don't match." });
    } else {
      response = res
        .status(200)
        .send({ message: "Success!", user: user.email, token: token });
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
