import { Request, Response } from "express";
import connection from "../connection";
import { Actor } from "../types/user";

const createActorPut = async (req: Request, res: Response): Promise<void> => {
  const actor: Actor = {
    id: req.body.id,
    name: req.body.name,
    salary: req.body.salary,
    dateOfBirth: new Date(req.body.birth_date),
    gender: req.body.gender,
  };

  await createQuery(actor);

  res.status(200).send({ message: actor });
};

const createQuery = async (actor: Actor): Promise<void> => {
  await connection
    .insert({
      id: actor.id,
      name: actor.name,
      salary: actor.salary,
      birth_date: new Date(actor.dateOfBirth),
      gender: actor.gender,
    })
    .into("Actor");
};

export default createActorPut;
