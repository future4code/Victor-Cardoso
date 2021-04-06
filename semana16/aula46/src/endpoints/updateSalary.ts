import { Request, Response } from "express";
import connection from "../connection";

const updateSalary = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body.id);
  const id: string = req.params.id;
  const salary: number = req.body.salary;
  console.log(id);
  console.log(req.body.salary);

  await updateQuery(id, salary);

  res.status(200).send("Salary updated!");
};

const updateQuery = async (id: string, salary: number): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

export default updateSalary;
