import connection from '../connection';
import { usersTable } from '../tableNames';

const deleteUser = async (userId: string): Promise<number> => {
  const result = await connection
    .delete()
    .from(usersTable)
    .where({ id: userId });

  return result;
};

export default deleteUser;
