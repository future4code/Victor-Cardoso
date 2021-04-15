import { Request, Response } from 'express';
import insertRecipe from '../../data/insertRecipe';
import queryUserById from '../../data/queryUserById';
import { getData } from '../../services/authenticator';
import createId from '../../services/idGen';
import { Recipe } from '../../types/recipe';

const createRecipe = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;
    const authData = getData(token);
    const user = await queryUserById(authData.id);
    const id = createId() as string;
    const recipe: Recipe = {
      id: id,
      title: req.body.title,
      description: req.body.description,
      user_id: user.id,
      created_at: '',
    };
    let response = res;

    await insertRecipe(recipe);

    response = res.status(201).send({
      message: 'Success!',
      recipe: { title: recipe.title, description: recipe.description },
      creator: { name: user.userName },
    });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default createRecipe;
