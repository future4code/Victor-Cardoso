import { Request, Response } from "express";
import connection from "../../connection";

const getUserById = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const id = req.params.id;
    const user = await connection("User").where("id", Number(id));

    if (user.length === 0) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send({ user });
  } catch (err) {
    console.error({ message: err.message });
    res.status(errorCode).send({
      message: err.message,
    });
  }
};

export default getUserById;
