import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import getUsersByName from "./endpoints/getUsersByName";
import getUsersByType from "./endpoints/getUsersByType";
import getOrderedUsersBy from "./endpoints/getOrderedUsersBy";
import getUsersByPage from "./endpoints/getUsersByPage";
import { getAllUsersWithFilter } from "./endpoints/getAllUsersWithFilter";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// Endpoint Routes
app.get("/users", getAllUsers);
app.get("/users/name", getUsersByName);
app.get("/users/search/:type", getUsersByType);
app.get("/users/search", getOrderedUsersBy);
app.get("/users/pages", getUsersByPage);
app.get("/users/filter", getAllUsersWithFilter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port: ${address.port}`);
  } else {
    console.error("Failed running the server.");
  }
});

export default connection;
