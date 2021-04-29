import { Router } from 'express';
import signIn from '../controller/auth/signIn';
import signUp from '../controller/auth/signUp';

const authRoutes = Router();

authRoutes.post('/signin', signIn);
authRoutes.post('/signup', signUp);

export default authRoutes;
