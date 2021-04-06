import connection from "../connection";

const getActorByName = async (name: string): Promise<void> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}";
  `);

  console.log(result[0]);

  return result[0][0];
};

// console.log(getActorByName("Uma Thurman"));

export default getActorByName;
