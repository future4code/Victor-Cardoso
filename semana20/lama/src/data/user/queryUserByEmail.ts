import connection from '../connection';
import { User } from '../../model/user';
import { usersTable } from '../tableNames';

const queryUserByEmail = async (email: string): Promise<User> => {
  try {
    const result = await connection(usersTable)
      .select('*')
      .where({ email: email });

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default queryUserByEmail;
