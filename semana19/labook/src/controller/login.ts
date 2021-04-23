import { Request, Response } from 'express'
import { loginInputDTO } from '../model/user'
import { loginBusiness } from '../business/loginBusiness'

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body as loginInputDTO

    const token: string = await loginBusiness({ email, password })

    return res.status(200).send({
      message: 'User logged in!',
      token,
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
