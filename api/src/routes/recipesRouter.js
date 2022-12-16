// const { Router } = require('express');
const { Recipe, Diet } = require("../db");
const allRecipes = require("../controllers/allRecipes");
const dbById = require("../controllers/dbGetId");
const apiById = require("../controllers/apiGetID");

/* const regExRule =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/; */

const recipesGetAll = async (req, res) => {
  try {
    const { name } = req.query;
    let recipes = await allRecipes(name);

    if (name) {
      let recipeByName = await recipes.filter((e) =>
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
      let recipes = recipes.map((e) => {
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

const modRecipe = async (req, res) => {
  res.send(
    console.log("esta es la funcion de modificacion de receta de la Db")
  );
};

module.exports = {
  recipesGetAll,
  recipeById,
  newRecipe,
  modRecipe,
};
