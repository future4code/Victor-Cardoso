import { Request, Response } from "express";
import connection from "..";
import User from "../types/user";

export const getAllUsersWithFilter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let orderBy = (req.query.orderBy as string) || ("name" as string);
    let orderType = (req.query.orderType as string) || ("ASC" as string);
    let page: string = req.query.page as string;
    let users: User[] = [];
    const userName = req.query.name as string;
    const userType = req.query.type as string;

    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "name";
    }

    if (orderType) {
      if (
        orderType.toUpperCase() !== "ASC" &&
        orderType.toUpperCase() !== "DESC"
      ) {
        orderType = "ASC";
      }
    }

    if (isNaN(Number(page)) || Number(page) < 1) {
      page = "1";
    }

    const limit = 5;
    const offset = limit * (Number(page) - 1);

    users = await filterAllUsers(
      userName,
      userType,
      orderBy,
      orderType,
      offset,
      limit
    );

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

async function filterAllUsers(
  userName: string,
  userType: string,
  orderBy: string,
  orderType: string,
  offset: number,
  limit: number
): Promise<User[]> {
  let result: User[] | any[] = [];

  if (userName || (userType && orderBy) || orderType) {
    result = await connection.raw(`
     SELECT * FROM Users
     WHERE (name LIKE "%${userName}%" OR type LIKE "%${userType}%")
     ORDER BY ${orderBy} ${orderType}
     LIMIT ${limit}
     OFFSET ${offset};
     `);
    return result[0];
  } else {
    result = await connection.raw(`
      SELECT * FROM Users
      ORDER BY name ASC
      LIMIT ${limit}
      OFFSET ${offset};
      `);
    return result[0];
  }
}
