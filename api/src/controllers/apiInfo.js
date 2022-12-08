const axios = require("axios");

//CONTROLLER FUNCTIONS
const getApiInfo = async () => {
  
  const { FOOD_KEY } = process.env;
  const apiReturn = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${FOOD_KEY}&addRecipeInformation=true&number=100`
  );

  const apiInfo = apiReturn.data.results.map(e => {
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

    /* return {
      name: e.title,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      stepByStep: e.analyzedInstructions[0]?.steps.map((e) => {
        return {
          step: e.number,
          do: e.step
        }
      })
    }; */
  })
  return apiInfo;
};

module.exports = getApiInfo;