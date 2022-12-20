require("dotenv").config();

const axios = require("axios").default;
const { APIKEY } = process.env;

// let index = 1;
// let apiKey;

const recipesApi = async function () {
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=50`,
      {headers: { "Accept-Encoding": "gzip,deflate,compress" }}
    );
    const recipes = res.data.results;
    return recipes.map((r) => {
      return {
        id: r.id,
        title: r.title,
        score: r.spoonacularScore,
        healthScore: r.healthScore,
        img: r.image,
        diets: r.diets,
      };
    });
  } catch (error) {
    console.log('Ocurrio el siguiente error al consultar a la API');
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = recipesApi;
