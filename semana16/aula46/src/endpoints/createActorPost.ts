import { Request, Response } from "express";
import connection from "../connection";
import { Actor } from "../types/user";

const createActorPost = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.body.id;
  const name: string = req.body.name;
  const salary: number = req.body.salary;
  const dateOfBirth: Date = req.body.birth_date;
  const gender: string = req.body.gender;

  await insertQuery({ id, name, salary, dateOfBirth, gender });

  res.status(200).send("Actor created!");
};

const insertQuery = async (actor: Actor): Promise<void> => {
  await connection
    .insert({
      id: actor.id,
      name: actor.name,
      salary: actor.salary,
      birth_date: actor.dateOfBirth,
      gender: actor.gender,
    })
    .into("Actor");
};

export default createActorPost;
// async function endpointDeCriar(req: Request, res: Response) {
//   const actorName: string = req.body.name;
//   await queryDeCriar(actorName);
// }

// async function queryDeCriar(name: string) {
//   await connection.insert({ name: name }).into("tabela");
// }
