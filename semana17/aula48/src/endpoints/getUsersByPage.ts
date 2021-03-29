import { Request, Response } from "express";
import connection from "..";
import User from "../types/user";

const getUsersByPage = async (req: Request, res: Response): Promise<void> => {
  try {
    let page = req.query.page as string;

    if (isNaN(Number(page)) || Number(page) < 1) {
      page = "1";
    }

    const limit = 5;
    const offset = limit * (Number(page) - 1);

    const users = await selectAllUsers(limit, offset);

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

async function selectAllUsers(limit: number, offset: number): Promise<User[]> {
  const result = await connection.raw(`
     SELECT * FROM Users
     LIMIT ${limit}
     OFFSET ${offset};
  `);

  return result[0];
}

export default getUsersByPage;
