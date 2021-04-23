import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(postRoutes)

const port = 3003
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
