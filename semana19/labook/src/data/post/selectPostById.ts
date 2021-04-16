import { Post } from '../../model/post'
import { connection } from '../connection'

const selectPostById = async (id: string): Promise<Post> => {
  const result: Post[] = await connection
    .select('*')
    .from('labook_posts')
    .where({ id })
  return result[0]
}

export default selectPostById
