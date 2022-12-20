const recipesApi = require("./recipesAPI")
const recipesDb = require("./recipesDB")
const recipeId = require("./recipeID")


const allRecipes = async () => {
    const rApi = await recipesApi()
    // const rBd = await recipesDb();
    const allRecipes = rApi;

    return allRecipes;
}



module.exports = {
    allRecipes,
    recipesApi,
    recipesDb,
    recipeId
}