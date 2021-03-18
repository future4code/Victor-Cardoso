import express, { Request, Response, Express } from 'express'
import cors from 'cors'

import { users, user, UserType } from './data/user'

const app: Express = express();

app.use(express.json());
app.use(cors());

// GET ALL USERS
app.get("/users", (req: Request, res: Response) => {
  try {
    const usersList = users.map((user) => {
      return user;
    })
    res.status(200).send(usersList)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// GET USER BY TYPE
app.get("/users/:type", (req: Request, res: Response) => {
  const type: string = req.params.type
  try {
    if (type && type in UserType) {
      throw new Error("User type doesn't exist. Try again!")
    }
    const usersByType = users.filter((user) => {
      return user.type === req.params.type;
    })
    res.status(200).send(usersByType)
  } catch (err) {
    res.status(400).send(err.message)
  }
})


// GET USERS BY TYPE OR NAME
app.get("/user/search/", (req: Request, res: Response) => {
  let usersList: user[] = users;
  try {
    if (!req.query.type && !req.query.name) {
      throw new Error("No query params found. Try again!")
    }
    if (req.query.type) {
      usersList = usersList.filter((user) => {
        if (req.query.type !== "ADMIN" && req.query.type !== "NORMAL") {
          throw new Error("User type does not exist.")
        }
        return user.type === req.query.type;
      })
      
    }

    if (req.query.name) {
      usersList = usersList.filter((user) => {
        if (!req.query.name) {
          throw new Error("User not found. Try again!")
        }
        return user.name.includes(req.query.name as string);
      })
    }

    const filteredUsers = usersList.map((user) => user)

    res.status(200).send(filteredUsers)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// CREATE USER
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    }
    if (!user.id || !user.name || !user.email || !user.type || !user.age) {
      errorCode = 422;
      throw new Error("Data does not match a user. Check the fields.")
    }
    users.push(user);

    res.status(200).send("User created!")
  } catch (err) {
    res.status(errorCode).send({message: err.message})
  }
})

// UPDATE USER
app.put("/user/edit/:id", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userIndex: number = users.findIndex((user) => {
      return user.id === Number(req.params.id);
    });

    console.log(userIndex)

    let user: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    }

    if (userIndex !== Number(req.params.id)) {
      throw new Error("User Id does not match.")
    }

    user = req.body
    
    if (!user.id || !user.name || !user.email || !user.type || !user.age) {
      errorCode = 422;
      throw new Error("Data does not match a user. Check the fields.")
    }

    res.status(200).send(user);
  } catch (err) {
    res.status(errorCode).send({message: err.message});
    throw new Error(err.message)
  }
})

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port 3001`);
})