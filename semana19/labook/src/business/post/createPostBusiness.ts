import insertPost from '../../data/post/insertPost'
import { createPostDTO } from '../../model/post'
import { generateToken } from '../../services/authenticator'
import { generateId } from '../../services/idGenerator'

const createPostBusiness = async (input: createPostDTO): Promise<string> => {
  try {
    if (!input.description || !input.photo || !input.authorId || !input.type) {
      throw new Error('Please fill all the fields.')
    }
    const id: string = generateId()
    const token: string = generateToken({ id })

    await insertPost({
      id: id,
      description: input.description,
      photo: input.photo,
      type: input.type,
      createdAt: input.createdAt,
      authorId: input.authorId,
    })
    return token
  } catch (error) {
    throw new Error(error.message)
  }
}

export default createPostBusiness
