import { Request, Response } from "express";
import connection from "..";

const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await queryUsersByType(req.params.type as string);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

async function queryUsersByType(type: string): Promise<[]> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM Users
     WHERE type = "${type}";
  `);

  return result[0];
}

export default getUsersByType;
