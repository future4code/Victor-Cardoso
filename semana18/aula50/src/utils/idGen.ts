import { v4 } from "uuid";

const createId = (): string => {
  const id = v4();
  console.log("Generated id", id);
  return id;
};

export default createId;
