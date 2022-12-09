// const { Router } = require('express');
const { Recipe, Diet } = require("../db");
const allRecipes = require("../controllers/allRecipes");
const dbById = require("../controllers/dbById");
const apiById = require("../controllers/apiById");

// const router = Router();
const regExRule =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const recipesGetAll = async (req, res) => {
  try {
    const { name } = req.query;
    let getAllRecipes = await allRecipes();

    if (name) {
      let recipeByName = await getAllRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      if (recipeByName.length) {
        let recipes = recipeByName.map((e) => {
          return {
            image: e.image,
            name: e.name,
            dietTypes: e.dietTypes ? e.dietTypes : e.diets.map((e) => e.name),
            score: e.score,
            id: e.id,
          };
        });
        return res.status(200).send(recipes);
      }
      return res.status(404).send("Sorry, recipe not found");
    } else {
      let recipes = getAllRecipes.map((e) => {
        return {
          image: e.image,
          name: e.name,
          dietTypes: e.dietTypes ? e.dietTypes : e.diets.map((e) => e.name),
          score: e.score,
          id: e.id,
        };
      });
      return res.status(200).send(recipes);
    }
  } catch {
    return res.status(400).send("invalid input");
  }
};

const recipeById = async (req, res) => {
  const { id } = req.params;
  try {
    if (regExRule.test(id)) {
      let dbRecipesById = await dbById(id);
      return res.status(200).json(dbRecipesById);
    } else {
      let apiRecipe = await apiById(id);
      if (apiRecipe.data.id) {
        let recipeDetails = {
          image: apiRecipe.data.image,
          name: apiRecipe.data.title,
          dishTypes: apiRecipe.data.dishTypes,
          dietTypes: apiRecipe.data.diets,
          summary: apiRecipe.data.summary,
          score: apiRecipe.data.spoonacularScore,
          healthScore: apiRecipe.data.healthScore,
          steps: apiRecipe.data.analyzedInstructions[0]?.steps.map(
            (el) => {
              return {
                number: el.number,
                step: el.step,
              };
            }
          ),
        };
        return res.status(200).send(recipeDetails);
      }
    }
  } catch {
    return res.status(404).send("Recipe not found");
  }
};

const newRecipe = async (req, res) => {
  try {
    const { name, summary, score, healthScore, steps, dietTypes } = req.body;
    const oneRecipe = await Recipe.create({
      name,
      summary,
      score,
      healthScore,
      steps,
    });

    let dietTypesRecipeDb = await Diet.findAll({
      where: { name: dietTypes },
    });
    oneRecipe.addDiet(dietTypesRecipeDb);
    res.status(200).send(oneRecipe);
  } catch (error) {
    res.status(400).send(error);
    // next(error)
  }
};

const modRecipe = async (res, req) => {};

module.exports = {
  recipesGetAll,
  recipeById,
  newRecipe,
  modRecipe,
};
