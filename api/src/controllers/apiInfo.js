const axios = require("axios");
const { FOOD_KEY } = process.env;

//CONTROLLER FUNCTIONS
const getApiInfo = async () => {
  const apiUrl = await axios.get(
    //
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${FOOD_API}&addRecipeInformation=true&number=100`
  );

  const apiInfo = await apiUrl.data.results.map(e => {
    return {
      id: e.id,
      image: e.image,
      name: e.title,
      dietTypes: e.diets,
      summary: e.summary,
      score: e.spoonacularScore,
      healthScore: e.healthScore,
      dishType: e.dishType,
      steps: e.analyzedInstructions[0]?.steps.map(e => {
        return{
          number: e.number,
          step: e.step
        }
      })
    }
  })
  return apiInfo;
};

module.exports = getApiInfo;