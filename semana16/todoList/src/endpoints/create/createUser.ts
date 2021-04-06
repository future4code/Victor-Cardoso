import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/user";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: User = {
      id: req.body.id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };

    if (
      req.body.name === "" ||
      req.body.nickname === "" ||
      req.body.email === ""
    ) {
      throw new Error("Você precisa preencher todos os campos!");
    } else {
      await insertQuery(user);
    }

    res.status(200).send({ message: user });
  } catch (err) {
    console.error({ message: err.message });
    res.status(400).send({ message: err.message });
  }
};

const insertQuery = async (user: User): Promise<void> => {
  await connection
    .insert({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
    })
    .into("User");
};

export default createUser;
