import connection from '../connection';
import { Recipe } from '../types/recipe';

const insertRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const result: Recipe[] = await connection
    .insert({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      user_id: recipe.user_id,
    })
    .into('Recipe');

  return result[0];
};

export default insertRecipe;
