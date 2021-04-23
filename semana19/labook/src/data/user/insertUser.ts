import { connection } from '../connection'
import { User } from '../../model/user'

export const insertUser = async (user: User) => {
  await connection
    .insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    })
    .into('labook_users')
}
