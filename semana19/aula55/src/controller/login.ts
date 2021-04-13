import { Request, Response } from 'express'
import { loginInputDTO } from '../model/user'
import { loginBusiness } from '../business/loginBusiness'

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    //é responsabilidade da controller, pois recebe do req
    const { email, password } = req.body as loginInputDTO

    //recebe o valor que precisa ser enviado como res
    const token: string = await loginBusiness({ email, password })

    //envia o valor de res
    return res.send({
      message: 'Usuário logado!',
      token,
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
