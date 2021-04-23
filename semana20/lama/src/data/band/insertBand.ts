import { Band } from '../../model/band';
import connection from '../connection';
import { bandsTable } from '../tableNames';

const insertBand = async (band: Band): Promise<Band> => {
  const result: Band[] = await connection
    .insert({
      id: band.id,
      name: band.name,
      music_genre: band.music_genre,
      responsible: band.responsible,
    })
    .into(bandsTable);
  return result[0];
};

export default insertBand;
