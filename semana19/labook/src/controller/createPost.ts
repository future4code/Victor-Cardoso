import { Request, Response } from 'express'
import createPostBusiness from '../business/post/createPostBusiness'
import { createPostDTO, Post } from '../model/post'
import { getTokenData } from '../services/authenticator'

const createPost = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = req.headers.authorization as string

    const { description, photo, type, createdAt } = req.body
    const tokenData = getTokenData(token)

    const post: createPostDTO = {
      description,
      photo,
      type,
      createdAt,
      authorId: tokenData.id,
    }

    await createPostBusiness(post)

    return res.status(201).send({
      message: 'Post created!',
      post: post,
    })
  } catch (error) {
    return res.status(400).send({ message: error.message })
  }
}

export default createPost
