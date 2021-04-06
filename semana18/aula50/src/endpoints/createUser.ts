import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/token";
import { User } from "../types/user";

import createId from "../utils/idGen";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = createId() as string;
    const userEmail: string = req.body.email;

    if (userEmail === "" || userEmail.indexOf("@") === -1) {
      res.status(400).send({ message: "Invalid email." });
    } else if (req.body.password.length < 6) {
      res.status(400).send({ message: "Password too short." });
    } else {
      const user: User = {
        id: id,
        email: userEmail,
        password: req.body.password,
      };

      await insertUser(user);

      const token = generateToken({ id });
      res.status(200).send({ message: "Success!", user: user, token: token });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const insertUser = async (data: User) => {
  const result = await connection
    .insert({
      id: data.id,
      email: data.email,
      password: data.password,
    })
    .into("User50");

  return result;
};

export default createUser;
