import { loginInputDTO, User } from '../model/user'
import { selectUserByEmail } from '../data/user/selectUserByEmail'
import { compare } from '../services/hashManager'
import { generateToken } from '../services/authenticator'

export async function loginBusiness(input: loginInputDTO): Promise<string> {
  try {
    if (!input.email || !input.password) {
      throw new Error('Please fill all the fields.')
    }

    const user: User = await selectUserByEmail(input.email)

    if (!user) {
      throw new Error('User not found.')
    }

    const passwordIsCorrect: boolean = await compare(
      input.password,
      user.password
    )

    if (!passwordIsCorrect) {
      throw new Error('Passwords do not match.')
    }

    const token: string = generateToken({
      id: user.id,
    })

    return token
  } catch (error) {
    throw new Error(error.message)
  }
}
