import { Router } from 'express'
import createPost from '../controller/createPost'
import getPostById from '../controller/getPostById'

const postRoutes = Router()

postRoutes.post('/posts/create', createPost)
postRoutes.get('/posts/:id', getPostById)

export default postRoutes
