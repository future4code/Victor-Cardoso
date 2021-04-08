import { Request, Response } from "express";
import connection from "../connection";
import getData from "../services/getData";

const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const userId = req.params.id as string;
    const token = req.headers.authorization as string;

    const authData = getData(token);

    if (authData.role !== "ADMIN") {
      throw new Error("Access denied.");
    }

    await queryDeleteUser(userId);

    const response = res
      .status(200)
      .send({ message: "Success!", id: `${authData.id}` });
    return response;
  } catch (err) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: err.message });
    }
  }
};

const queryDeleteUser = async (userId: string): Promise<void> => {
  await connection.delete().from("User50").where({ id: userId });
};

export default deleteUser;
