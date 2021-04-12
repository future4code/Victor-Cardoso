import connection from '../connection';

const deleteUser = async (userId: string): Promise<number> => {
  const result = await connection
    .delete()
    .from('User_Arq')
    .where({ id: userId });

  return result;
};

export default deleteUser;
