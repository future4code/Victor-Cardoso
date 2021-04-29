import queryBandById from '../../data/band/queryBandById';
import queryBandByName from '../../data/band/queryBandByName';
import { getData } from '../../services/authenticator';

const getBandBusiness = async (
  token: string,
  id?: string | undefined,
  name?: string | undefined
) => {
  try {
    getData(token);
    if (!id && !name) {
      throw new Error('No query param found for the search.');
    }
    if (id) {
      return await queryBandById(id);
    }
    if (name) {
      return await queryBandByName(name);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getBandBusiness;
