import connection from '../connection';

const queryUsers = async () => {
  try {
    const result = await connection.select('*').from('User_Arq');

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default queryUsers;
