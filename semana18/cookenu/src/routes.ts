import { Router } from 'express';
import signIn from './endpoints/auth/signIn';
import deleteUser from './endpoints/user/deleteUser';
import getUserById from './endpoints/user/getUserById';
import getUserProfile from './endpoints/user/getUserProfile';
import signUp from './endpoints/auth/signUp';
import getUserByEmail from './endpoints/user/getUserByEmail';
import createRecipe from './endpoints/recipe/createRecipe';
import getRecipeById from './endpoints/recipe/getRecipeById';

const routes = Router();

// User routes
routes.post('/signin', signIn);
routes.post('/signup', signUp);
routes.get('/user/profile', getUserProfile);
routes.get('/user/:id', getUserById);
routes.get('/user/email/:email', getUserByEmail);
routes.delete('/user/:id', deleteUser);

// Recipe routes
routes.post('/recipe', createRecipe);
routes.get('/recipe/:id', getRecipeById);

export default routes;
