import { Post } from '../../model/post'
import { connection } from '../connection'

const insertPost = async (post: Post): Promise<Post[]> => {
  const result: Post[] = await connection('labook_posts').insert({
    id: post.id,
    description: post.description,
    photo: post.photo,
    created_at: post.createdAt,
    author_id: post.authorId,
  })

  return result
}

export default insertPost
