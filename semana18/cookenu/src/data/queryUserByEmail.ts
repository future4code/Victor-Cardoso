import connection from '../connection';
import { User } from '../types/user';

const queryUserByEmail = async (email: string): Promise<User> => {
  const result = await connection('User').select('*').where({ email: email });
  return result[0];
};

export default queryUserByEmail;
