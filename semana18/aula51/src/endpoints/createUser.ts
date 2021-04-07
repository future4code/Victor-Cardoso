import { hash } from "../utils/hash";
import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/token";
import { User } from "../types/user";

import createId from "../utils/idGen";

const createUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const id = createId() as string;
    const { email, password, role } = req.body;
    const hashPassword = await hash(password);
    const user: User = {
      id: id,
      email: email,
      password: hashPassword,
      role: role,
    };

    if (!email || !password) {
      response = res
        .status(400)
        .send({ message: "Please fill all the fields." });
    } else if (email.indexOf("@") === -1) {
      response = res.status(400).send({ message: "Invalid email." });
    } else if (req.body.password.length < 6) {
      response = res.status(400).send({ message: "Password too short." });
    } else {
      await insertUser(user);

      const token = generateToken({ id, role });

      response = res.status(200).send({
        message: "Success!",
        user: { id: user.id, email: user.email, role: user.role },
        token: token,
      });
    }

    return response;
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
      role: data.role,
    })
    .into("User50");

  return result;
};

export default createUser;
