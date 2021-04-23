import { Band } from '../../model/band';
import connection from '../connection';
import { bandsTable } from '../tableNames';

const queryBands = async (): Promise<Band[]> => {
  try {
    const result: Band[] = await connection.select('*').from(bandsTable);

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default queryBands;
