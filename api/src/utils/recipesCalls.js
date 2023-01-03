const axios = require("axios").default;
const { API_KEY } = process.env;
const RecipeFormater = require("../routes/controllers/FormatRecipe");

async function allAPI() {
  try {
    let response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    let callResp = [];
    if (response.data.results) {
      response.data.results.map((item) => {
        let obj = RecipeFormater(
          item.id,
          item.title,
          item.spoonacularScore,
          item.image,
          item.diets
        );
        callResp.push(obj);
      });
      return callResp;
    }
  } catch (error) {
    console.log("Something goes wrong when calling without name param");
    console.log(error.message);
  }
}

async function recipeName(name) {
  try {
    let response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=100`
    );
    let callNameResp = [];
    if (response.data.results) {
      response.data.results.map((item) => {
        let obj = RecipeFormater(
          item.id,
          item.title,
          item.spoonacularScore,
          item.image,
          item.diets
        );
        callNameResp.push(obj);
      });
      return callNameResp;
    }
  } catch (error) {
    console.log("Something goes wrong when calling with name param");
    console.log(error.message);
  }
}

async function recipeId(id) {
  try {
    let item = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    let data = item.data;
    const dietList = [...data.diets];
    // data.vegetarian && dietList.push("vegetarian");
    // data.vegan && dietList.push("vegan");
    // data.glutenFree && dietList.push("gluten free");

    let filtered = [...new Set(dietList)];

    let stepsFormated = [];
    data.analyzedInstructions.map((item) => {
      let nested = [];
      item.steps.map((step) => {
        nested.push([step.number, step.step]);
      });
      stepsFormated.push([item.name, nested]);
      return nested;
    });

    const text = data.summary.replace(/<[^>]+>/g, "");
    let obj = {
      name: data.title,
      id: data.id,
      image: data.image,
      summary: text,
      dishTypes: data.dishTypes,
      diets: filtered,
      healthScore: data.healthScore,
      score: data.spoonacularScore,
      steps: stepsFormated,
    };
    return obj;
  } catch (error) {
    console.log("Something goes wrong when calling by ID");
    console.log(error.message);
    return [];
  }
}

module.exports = {
  allAPI,
  recipeName,
  recipeId,
};
