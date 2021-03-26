import { Request, Response } from "express";
import connection from "../connection";

const getActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const actor = await connection("Actor").where("id", id);

    res.status(200).send({ actor });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

export default getActorById;
