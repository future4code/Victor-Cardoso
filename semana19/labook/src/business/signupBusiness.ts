import { signupInputDTO } from '../model/user'
import { generateId } from '../services/idGenerator'
import { hash } from '../services/hashManager'
import { insertUser } from '../data/user/insertUser'
import { generateToken } from '../services/authenticator'

export async function signupBusiness(input: signupInputDTO): Promise<string> {
  try {
    if (!input.name || !input.email || !input.password) {
      throw new Error('Please fill all the fields.')
    }

    const id: string = generateId()

    const cypherPassword = await hash(input.password)

    await insertUser({
      id,
      name: input.name,
      email: input.email,
      password: cypherPassword,
    })

    const token: string = generateToken({
      id,
    })

    return token
  } catch (error) {
    throw new Error(error.message)
  }
}
