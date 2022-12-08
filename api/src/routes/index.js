const { Router } = require('express');
// Importar todos los routers; - Ejemplo: const authRouter = require('./auth.js');
// const recipesRouter = require('./recipes');
// const typesRouter = require('./types');
// const recipeRouter = require('./recipe');
const { recipesGetAll,
        recipeById,
        newRecipe,
        modRecipe } = require('./recipes');
const { dietTypeFn } = require('./types');

const router = Router();

// Configurar los routers - Ejemplo: router.use('/auth', authRouter);
// router.use('/recipes', recipesRouter);
// router.use('/recipe', recipeRouter);
// router.use('/types', typesRouter);

router.route('/recipes')
        .get(recipesGetAll);

router.route('/recipes/:id')
        .get(recipeById);

router.route('/recipe')
        .post(newRecipe)
        .put(modRecipe);

router.route('/types')
        .get(dietTypeFn);


module.exports = router;
