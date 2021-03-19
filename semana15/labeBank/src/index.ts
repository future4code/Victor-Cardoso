import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"

import { User } from './types/user'
import { users } from "./data/users";

const app: Express = express();

app.use(express.json())
app.use(cors())

// CREATE USER ACCOUNT
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 404;
  try {
    const userBody: User = {
      id: req.body.id,
      name: req.body.name,
      cpf: req.body.cpf,
      balance: 0,
      birthday: req.body.birthday,
      statement: req.body.statement
    }

    let userBirthday = new Date(req.body.birthday) // transform type string to type Date

    userBirthday.toISOString().slice(0, 10) // transform date to ISO string

    const today = Date.now() // get actual date

    const ageInMili = today - userBirthday.getTime() // get age in milliseconds

    const ageInYears = ageInMili / 1000 / 60 / 60 / 24 / 365 // transform age from milliseconds to years

    if (ageInYears < 18) {
      res.status(403).send({ message: "Você precisa ter mais de 18 anos para se cadastrar."})
    } else {

      users.push(userBody);
  
      res.status(200).json(`Usuário cadastrado com sucesso!`);
    }

  } catch(err) {
    res.status(errorCode).send(new Error(err.message));
  }
});

// GET ALL USERS
app.get("/users", (req: Request, res: Response) => {
  let errorCode = 404;
  try {
    const usersList = users.map((user) => {
      return user;
    })
    res.status(200).json({usersList})
  } catch(err) {
    res.status(errorCode).send(new Error(err.message))
  }
})

// GET ACCOUNT BALANCE BY NAME OR CPF
app.get("/user/:id", (req: Request, res: Response) => {
  let errorCode = 404;
  try {

  } catch(err) {
    res.status(errorCode).send(new Error(err.message))
  }
});

// ADD BALANCE TO USER ACCOUNT
app.post("", (req: Request, res: Response) => {
  let errorCode = 404;
  try {

  } catch(err) {
    res.status(errorCode).send(new Error(err.message))
  }
});

// PAY BILL
app.post("", (req: Request, res: Response) => {
  let errorCode = 404;
  try {

  } catch(err) {
    res.status(errorCode).send(new Error(err.message))
  }
});

// TRANSFER MONEY
app.post("", (req: Request, res: Response) => {
  let errorCode = 404;
  try {

  } catch(err) {
    res.status(errorCode).send(new Error(err.message))
  }
});

const server = app.listen(process.env.PORT || 3001, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running on port: ${address.port}`);
  } else {
    console.error(`Failed running server.`);
  }
})