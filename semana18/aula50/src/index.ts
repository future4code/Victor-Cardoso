import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUserByEmail from "./endpoints/getUserByEmail";
import getUserProfile from "./endpoints/getUserProfile";
import loginUser from "./endpoints/loginUser";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users/signup", createUser);
app.post("/users/signin", loginUser);
app.get("/users/:email", getUserByEmail);
app.get("/user/profile", getUserProfile);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port: ${address.port}`);
  } else {
    console.error("Failed running the server.");
  }
});
