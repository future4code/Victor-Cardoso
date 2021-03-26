import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/create/createUser";

// App creation
const app: Express = express();

app.use(express.json());
app.use(cors());

// User Routes
app.put("/user", createUser);
app.get("/user/:id");

// Task Routes
app.put("/task");

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port: ${address.port}`);
  } else {
    console.error("Failed running the server.");
  }
});
