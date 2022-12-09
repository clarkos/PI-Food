const { Router } = require('express');
// Importar todos los routers; - Ejemplo: const authRouter = require('./auth.js');
// const recipesRouter = require('./recipes');
// const typesRouter = require('./types');
// const recipeRouter = require('./recipe');
const { dietTypeFn } = require('./types');
const { recipesGetAll,
        recipeById,
        newRecipe,
        modRecipe } = require('./recipes');

const app = Router();

// Configurar los routers - Ejemplo: app.use('/auth', authRouter);
// app.use('/recipes', recipesRouter);
// app.use('/recipe', recipeRouter);
// app.use('/types', typesRouter);

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
