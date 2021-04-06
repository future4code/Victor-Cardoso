import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../types/task";

const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task: Task = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      limitDate: new Date(req.body.limitDate),
      creatorUserId: req.body.creatorUserId,
    };
    if (
      req.body.title === "" ||
      req.body.description === "" ||
      req.body.limitDate === ""
    ) {
      throw new Error("Você precisa preencher todos os campos!");
    } else {
      await insertQuery(task);
    }

    res.status(200).send({ message: task });
  } catch (err) {
    console.error({ message: err.message });
    res.status(400).send({ message: err.message });
  }
};

const insertQuery = async (task: Task): Promise<void> => {
  await connection
    .insert({
      id: task.id,
      title: task.title,
      description: task.description,
      limitDate: task.limitDate,
      creatorUserId: task.creatorUserId,
    })
    .into("Task");
};

export default createTask;
