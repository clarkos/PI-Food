require("dotenv").config();
const axios = require("axios").default;
const { APIKEY } = process.env;

const recipeId = async (id) => {
  try {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`,
      {headers: { "Accept-Encoding": "gzip,deflate,compress" }}
    );
    const r = recipe.data;
    const recipeChosen = {
      id: r.id,
      title: r.title,
      healthScore: r.healthScore,
      dishTypes: r.dishTypes,
      img: r.image,
      summary: r.summary,
      instructions: r.instructions,
      diets: r.diets,
    };
    return recipeChosen;
  } catch (e) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = recipeId;
