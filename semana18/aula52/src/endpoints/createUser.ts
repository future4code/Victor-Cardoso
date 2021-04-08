/* eslint-disable @typescript-eslint/no-explicit-any */
import { hash } from "../services/hash";
import { Request, Response } from "express";
import connection from "../connection";
import generateToken from "../services/token";
import { User } from "../types/user";

import createId from "../services/idGen";
import getAddress from "../services/getAddress";

const createUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    let response = res;
    const id = createId() as string;
    const { email, password, role, cep, numero, complemento } = req.body;
    const hashPassword = await hash(password);
    const user: User = {
      id: id,
      email: email,
      password: hashPassword,
      role: role,
      cep: cep,
      numero: numero,
      complemento: complemento,
    };

    if (!email || !password) {
      response = res
        .status(400)
        .send({ message: "Please fill all the fields." });
    } else if (email.indexOf("@") === -1) {
      response = res.status(400).send({ message: "Invalid email." });
    } else if (req.body.password.length < 6) {
      response = res.status(400).send({ message: "Password too short." });
    } else {
      const address: any = await getAddress(user.cep);

      await insertUser(user.id, user.email, user.password, user.role);

      await insertAddress(
        user.id,
        user.cep,
        user.complemento,
        user.numero,
        address.street,
        address.neighbourhood,
        address.state,
        address.city
      );

      const token = generateToken({ id, role });

      response = res.status(200).send({
        message: "Success!",
        user: { id: user.id, email: user.email, role: user.role },
        token: token,
      });
    }

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const insertUser = async (
  id: string,
  email: string,
  password: string,
  role: string
) => {
  const result = await connection
    .insert({
      id,
      email,
      password,
      role,
    })
    .into("User50");

  return result;
};

const insertAddress = async (
  userId: string,
  cep: string,
  street: string,
  numero: string,
  complemento: string,
  neighbourhood: string,
  city: string,
  state: string
): Promise<number[]> => {
  const result = await connection
    .insert({
      cep,
      logradouro: street,
      numero,
      complemento,
      bairro: neighbourhood,
      cidade: city,
      estado: state,
      user_id: userId,
    })
    .into("Address");

  return result;
};

export default createUser;
