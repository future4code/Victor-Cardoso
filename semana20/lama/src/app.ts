import express, { Express } from 'express';
import cors from 'cors';
import userRoutes from './routes/user';
import authRoutes from './routes/auth';
import bandRoutes from './routes/band';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(authRoutes);
app.use(bandRoutes);

export default app;
