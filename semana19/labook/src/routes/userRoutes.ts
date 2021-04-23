import { Router } from 'express'
import { login } from '../controller/login'
import { signup } from '../controller/signup'

const userRoutes = Router()
userRoutes.post('/users/signup', signup)
userRoutes.post('/users/login', login)

export default userRoutes
