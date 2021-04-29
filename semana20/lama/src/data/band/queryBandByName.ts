import { Band } from '../../model/band';
import connection from '../connection';
import { bandsTable } from '../tableNames';

const queryBandByName = async (name: string): Promise<Band> => {
  const result: Band[] = await connection
    .select('*')
    .from(bandsTable)
    .where({ name: name });

  return result[0];
};

export default queryBandByName;
