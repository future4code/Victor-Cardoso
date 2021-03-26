import { Request, Response } from "express";
import connection from "../connection";

// const countActorsByGender = async (gender: string): Promise<void> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//   `);

//   const count = result[0][0].count;

//   console.log(count);

//   return count;
// };
const countActorsByGender = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gender: string = req.query.gender as string;
    const result = await countQuery(gender);

    res.status(200).send({ quantity: result });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const countQuery = async (gender: string): Promise<number> => {
  const result = await connection("Actor")
    .count("* as count")
    .where("gender", gender);

  const count = Number(result[0].count);

  return count;
};

// console.log(countActorsByGender("male"));
// console.log(countActorsByGender("female"));

export default countActorsByGender;
