import { Router } from 'express';
import getAllUsers from '../controller/user/getAllUsers';
import getUserByEmail from '../controller/user/getUserByEmail';
import getUserById from '../controller/user/getUserById';
import getUserProfile from '../controller/user/getUserProfile';
import deleteUser from '../data/user/deleteUser';

const userRoutes = Router();

userRoutes.get('/users', getAllUsers);
userRoutes.get('/user/profile', getUserProfile);
userRoutes.get('/user/:id', getUserById);
userRoutes.get('/user/email/:email', getUserByEmail);
userRoutes.delete('/user/:id', deleteUser);

export default userRoutes;
