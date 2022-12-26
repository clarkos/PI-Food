const recipesApi = require("./recipesAPI")
const recipesDb = require("./recipesDB")
const recipeId = require("./recipeID")
const { getDiets } = require("./diet")


const allRecipes = async () => {
    const rApi = await recipesApi()
    const rBd = await recipesDb();
    const allRecipes = rApi + rBd;

    return allRecipes;
}

module.exports = {
    allRecipes,
    recipesApi,
    recipesDb,
    recipeId,
    getDiets
}