import { Request, Response } from "express";
import connection from "../connection";

const getAllActors = async (req: Request, res: Response): Promise<void> => {
  const result = await connection.raw(`
    SELECT * FROM Actor;
  `);

  res.status(200).send(result[0]);
  return result[0];
};

export default getAllActors;
