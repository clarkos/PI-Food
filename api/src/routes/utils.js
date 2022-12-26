const { allRecipes, recipeId, recipesDb, getDiets } = require("../controller");
const { Recipe, Diet } = require("../db");

//! recivo un string, compruebo si esta incluido en alguna de las recetas devuelvo sus primeros 9 valores, sino retorno false

const searchForName = async (value) => {
  try {
    const recipes = await allRecipes();
    const allSearch = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value)
    );
    if (allSearch.length >= 1) return allSearch;
    return false;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

//! utilizo el id para buscar una receta tanto desde en la bd como desde la api y devolver sus detalles

const searchForId = async (id) => {
  const searchId = await recipeId(id);
  if (searchId) return searchId;
  const db = await recipesDb();
  const searchDB = db.find((recipe) => recipe.id === id);
  if (db) return searchDB;
  return searchId;
};

//! retorno todos los tipos de dieta cargados en la base de datos

const searchTypes = async () => {
  const types = await Diet.findAll({
    attributes: ["id", "name"],
  });
  return types;
};

//! Creo una nueva receta agregandole los parametros que voy a recibir
const addRecipe = async (title, summary, healthScore, instructions, diet) => {
  const createRecipe = await Recipe.create({
    title,
    summary,
    healthScore,
    instructions,
  });
  diet.forEach(async (e) => {
    const diet = e.title[0].toUpperCase() + e.title.slice(1);
    const d = await Diet.findOne({ where: { title: diet } });

    await createRecipe.setDiets(d);
    await d.setRecipes(createRecipe);
  });
  return createRecipe;
};

const addDiet = async (d) => {
  const diet = d.title[0].toLowerCase(); //pongo todo en minuscula para evitar errores
  const check = await Diet.findOne({ where: { title: diet } });
  if (check === null) {
    const createDiet = await Diet.create({
      title: diet,
      // description: d.description
    });
    return createDiet;
  }
  return check;
};

const searchAll = async () => {
  const recipes = await allRecipes();
  return recipes;
};

const searchForDiets = async (diet) => {
  const recipes = await allRecipes();
  const dietsFilter = recipes.filter((recipe) => {
    let check = false;
    recipe.diets.forEach((e) => {
      if (e.toLowerCase().includes(diet.toLowerCase())) check = true;
    });

    return check;
  });
  return dietsFilter;
};

module.exports = {
  searchForId,
  searchForName,
  searchTypes,
  addRecipe,
  searchAll,
  addDiet,
  searchForDiets,
};
