import express, { Express } from "express";

import cors from "cors";

import { AddressInfo } from "net";
import getActorByName from "./endpoints/getActorByName";
import getAllActors from "./endpoints/getAllActors";
import countActorsByGender from "./endpoints/countActorsByGender";
import createActorPost from "./endpoints/createActorPost";
import updateSalary from "./endpoints/updateSalary";
import deleteActor from "./endpoints/deleteActor";
import getAvgSalary from "./endpoints/getAvgSalary";
import getActorById from "./endpoints/getActorById";
import createActorPut from "./endpoints/createActorPut";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/actors", getAllActors);
app.get("/actor/:id", getActorById);
app.get("/actor/:name", getActorByName);
app.get("/actor", countActorsByGender);
app.post("/actors", createActorPost);
app.put("/actor", createActorPut);
app.post("/actor", updateSalary);
app.put("/actor/:id", updateSalary);
app.delete("/actor/:id", deleteActor);
app.get("/actors/averageSalary/", getAvgSalary);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on port: ${address.port}`);
  } else {
    console.error("Failed running the server.");
  }
});
