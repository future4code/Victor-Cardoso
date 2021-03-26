import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/create/createUser";
import getUserById from "./endpoints/getById/getUserById";
import updateUser from "./endpoints/update/updateUser";
import createTask from "./endpoints/create/createTask";

// App creation
const app: Express = express();

app.use(express.json());
app.use(cors());

// User Routes
app.put("/user", createUser);
app.get("/user/:id", getUserById);
app.post("/user/edit/:id", updateUser);

// Task Routes
app.put("/task", createTask);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port: ${address.port}`);
  } else {
    console.error("Failed running the server.");
  }
});
