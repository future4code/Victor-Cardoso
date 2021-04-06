import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/user";

const updateUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const userId: string = req.params.id;
    const user = {
      id: userId,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };
    console.log("updateUser", user);

    if (!user.id) {
      errorCode = 404;
      throw new Error("User not found.");
    }
    if (user.name === "") {
      errorCode = 406;
      throw new Error("User name cannot be empty.");
    } else if (user.nickname === "") {
      errorCode = 406;
      throw new Error("User nickname cannot be empty.");
    } else if (user.email === "") {
      errorCode = 406;
      throw new Error("User email cannot be empty.");
    } else {
      await updateQuery(user);
    }

    res.status(200).send({ message: `User updated ${user}` });
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
};

const updateQuery = async (user: User): Promise<void> => {
  console.log("updateQuery", user);
  await connection("User")
    .update({
      id: Number(user.id),
      name: user.name,
      nickname: user.nickname,
      email: user.email,
    })
    .where("id", user.id);
};

export default updateUser;
