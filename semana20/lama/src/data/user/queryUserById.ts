import connection from '../connection';
import { User } from '../../model/user';
import { usersTable } from '../tableNames';

const queryUserById = async (userId: string): Promise<User> => {
  const result: User[] = await connection(usersTable)
    .select('*')
    .where({ id: userId });

  return result[0];
};

export default queryUserById;
