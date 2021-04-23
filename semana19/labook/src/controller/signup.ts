import { Request, Response } from 'express'
import { signupInputDTO } from '../model/user'
import { signupBusiness } from '../business/signupBusiness'

export const signup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body as signupInputDTO

    const token = await signupBusiness({
      name,
      email,
      password,
    })

    return res.status(201).send({
      message: 'User created!',
      token,
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
