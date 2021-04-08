import { Request, Response } from "express";
import connection from "../connection";

const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const userEmail = req.params.email;
    const user = await queryUserByEmail(userEmail);

    res.status(200).send({ message: "Success!", user: user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const queryUserByEmail = async (email: string): Promise<void> => {
  const result = await connection("User50").select("*").where({ email });

  return result[0];
};

export default getUserByEmail;
