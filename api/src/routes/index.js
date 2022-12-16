const { Router } = require('express');
// Importar todos los routers; - Ejemplo: const authRouter = require('./auth.js');

const { dietTypeFn } = require('./types');
const { recipesGetAll,
        recipeById,
        newRecipe,
        modRecipe } = require('./recipes');

const app = Router();

app.route('/recipes')
        .get(recipesGetAll);

app.route('/recipes/:id')
        .get(recipeById);

app.route('/recipe')
        .post(newRecipe)
        .put(modRecipe);

app.route('/types')
        .get(dietTypeFn);


module.exports = app;
