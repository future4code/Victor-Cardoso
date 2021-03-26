import { Request, Response } from "express";
import connection from "../connection";

const getAvgSalary = async (req: Request, res: Response): Promise<void> => {
  const gender: string = req.body.gender;

  const salaryAverage = await queryAvgSalary(gender);

  res.status(200).send({ salaryAverage });
};

const queryAvgSalary = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

export default getAvgSalary;
