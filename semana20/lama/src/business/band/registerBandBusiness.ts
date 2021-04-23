import insertBand from '../../data/band/insertBand';
import queryBands from '../../data/band/queryBands';
import { BandDTO } from '../../model/band';
import { getData } from '../../services/authenticator';
import createId from '../../services/idGen';

const registerBandBusiness = async (input: BandDTO, token: string) => {
  try {
    const id = createId() as string;
    const userLogged = getData(token);
    if (!input.name || !input.music_genre || !input.responsible) {
      throw new Error('Please fill all the fields.');
    }

    if (userLogged.role !== 'ADMIN') {
      throw new Error('Access denied.');
    }
    const bandsList = await queryBands();
    const bandNames = bandsList.map((band) => band.name);

    const isValid = (names: string[]) => {
      if (!bandsList) throw new Error('No bands found.');
      if (names.includes(input.name)) return false;
      else return true;
    };

    if (!isValid(bandNames)) {
      throw new Error('Band already registered.');
    }

    await insertBand({
      id: id,
      name: input.name,
      music_genre: input.music_genre,
      responsible: input.responsible,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default registerBandBusiness;
