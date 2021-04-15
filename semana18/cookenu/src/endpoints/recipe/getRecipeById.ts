import { Request, Response } from 'express';
import queryRecipeById from '../../data/queryRecipeById';
import { getData } from '../../services/authenticator';

const getRecipeById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;
    const recipeId = req.params.id as string;
    getData(token);

    if (!recipeId) {
      throw new Error('Recipe Id not found.');
    }
    const recipe = await queryRecipeById(recipeId);

    let createdAt = recipe.created_at;
    if (recipe.created_at.length !== 0) {
      createdAt.slice(0, 10);
    }
    // const createdAt = recipe.created_at.slice(0, 10) as string;
    // console.log(createdAt.slice(0, 10));

    return res.status(200).send({
      message: 'Success!',
      recipe: {
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: createdAt,
      },
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default getRecipeById;
