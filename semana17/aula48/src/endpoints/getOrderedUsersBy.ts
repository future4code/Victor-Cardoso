import { Request, Response } from "express";
import connection from "..";

import User from "../types/user";

const getOrderedUsersBy = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let orderBy = req.query.orderBy as string;
    const userName = req.query.name as string;
    const userType = req.query.type as string;
    let users: User[] = [];

    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "email";
    }

    users = await queryOrderedUsers(orderBy, userName, userType);

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

async function queryOrderedUsers(
  userName: string,
  userType: string,
  orderBy: string
): Promise<User[]> {
  console.log(orderBy);
  const result = await connection.raw(`
     SELECT * FROM Users
     WHERE (name LIKE "%${userName}%" OR type LIKE "%${userType}%")
     ORDER BY ${orderBy} ASC;
     `);

  if (!result.length) {
    throw new Error("No users found");
  }

  return result[0];
}

export default getOrderedUsersBy;
