import deleteUser from '../../data/user/deleteUser';
import { getData } from '../../services/authenticator';

const deleteUserBusiness = async (input: { id: string; token: string }) => {
  try {
    const authData = getData(input.token);

    console.info('authData', authData);

    if (authData.role !== 'ADMIN') {
      throw new Error('Access denied.');
    }

    return await deleteUser(input.id);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default deleteUserBusiness;
