import { Request, Response } from "express";
import connection from "../connection";

const deleteActor = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;
  console.log(req);
  console.log(req.body);

  await connection("Actor").delete().where("id", id);

  res.status(200).send("Actor deleted.");
};

export default deleteActor;
