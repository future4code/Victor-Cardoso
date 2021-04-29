import connection from '../connection';
import { User } from '../../model/user';
import { usersTable } from '../tableNames';

const insertUser = async (user: User): Promise<User> => {
  const result: User[] = await connection
    .insert({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role,
    })
    .into(usersTable);

  return result[0];
};

export default insertUser;
