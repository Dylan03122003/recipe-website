import axios from "axios";

const apiKey = "ea22735712054f718aaca4451be8a41c";

export const getRandomRecipes = async (number, setRecipes) => {
  const reponse = await axios.get(
    `https://api.spoonacular.com/recipes/random?number=${number}`,
    {
      params: {
        apiKey,
      },
    }
  );

  const data = reponse.data;
  setRecipes(data.recipes);
};

export const getRecipeInformation = async (recipeID, setRecipeDetail) => {
  const reponse = await axios.get(
    `https://api.spoonacular.com/recipes/${recipeID}/information`,
    {
      params: {
        apiKey,
      },
    }
  );

  const data = reponse.data;
  setRecipeDetail(data);
};
