import connection from '../connection';
import { User } from '../types/user';

const queryUserById = async (userId: string): Promise<User> => {
  const result = await connection('User').select('*').where({ id: userId });

  return result[0];
};

export default queryUserById;
