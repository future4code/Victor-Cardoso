import connection from '../connection';
import { User } from '../model/user';

const queryUserByEmail = async (email: string): Promise<User> => {
  try {
    const result = await connection('User').select('*').where({ email: email });

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default queryUserByEmail;
