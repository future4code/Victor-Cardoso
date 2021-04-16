import { connection } from './../connection'
import { User } from '../../model/user'

const selectUserById = async (id: string): Promise<User[]> => {
  return await connection.select('*').from('labook_users').where({ id })
}

export default selectUserById
