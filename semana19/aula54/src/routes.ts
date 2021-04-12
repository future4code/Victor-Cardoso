import { Router } from 'express';
import signIn from './controller/auth/signIn';
import deleteUser from './controller/user/deleteUser';
import getUserById from './controller/user/getUserById';
import getUserProfile from './controller/user/getUserProfile';
import signUp from './controller/auth/signUp';
import getUserByEmail from './controller/user/getUserByEmail';
import getAllUsers from './controller/user/getAllUsers';

const routes = Router();

// User routes
routes.post('/signin', signIn);
routes.post('/signup', signUp);
routes.get('/all', getAllUsers);
routes.get('/user/profile', getUserProfile);
routes.get('/user/:id', getUserById);
routes.get('/user/email/:email', getUserByEmail);
routes.delete('/user/:id', deleteUser);

export default routes;
