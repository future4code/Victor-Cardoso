import { Request, Response } from 'express'
import selectPostById from '../data/post/selectPostById'
import { Post } from '../model/post'

const getPostById = async (
  req: Request,
  res: Response
): Promise<Post | Response> => {
  try {
    const { id } = req.params

    const post: Post = await selectPostById(id)

    if (!post) {
      throw new Error('Post not found')
    }

    res.status(200).send(post)
    return post
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export default getPostById
