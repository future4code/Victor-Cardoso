import queryUsers from '../../data/user/queryUsers';
import { getData } from '../../services/authenticator';

const getUsersBusiness = async (token: string) => {
  getData(token);

  return await queryUsers();
};

export default getUsersBusiness;
