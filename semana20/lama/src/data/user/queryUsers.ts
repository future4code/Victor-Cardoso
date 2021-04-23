import connection from '../connection';
import { usersTable } from '../tableNames';

const queryUsers = async () => {
  try {
    const result = await connection.select('*').from(usersTable);

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default queryUsers;
