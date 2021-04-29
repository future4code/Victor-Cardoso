import { Band } from '../../model/band';
import connection from '../connection';
import { bandsTable } from '../tableNames';

const queryBandById = async (bandId: string): Promise<Band> => {
  const result: Band[] = await connection
    .select('*')
    .from(bandsTable)
    .where({ id: bandId });

  return result[0];
};

export default queryBandById;
