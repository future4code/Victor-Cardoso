import connection from '../connection';
import { Recipe } from '../types/recipe';

const queryRecipeById = async (recipeId: string): Promise<Recipe> => {
  const result = await connection('Recipe').select('*').where({ id: recipeId });

  return result[0];
};

export default queryRecipeById;
