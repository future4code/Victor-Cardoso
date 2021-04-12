import connection from '../connection';
import { User } from '../model/user';

const insertUser = async (user: User) => {
  const result = await connection
    .insert({
      id: user.id,
      email: user.email,
      userName: user.userName,
      password: user.password,
      role: user.role,
    })
    .into('User_Arq');

  return result[0];
};

export default insertUser;
