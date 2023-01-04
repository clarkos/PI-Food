const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const recipes = require('./Recipes/retrieveRecipes');
const recipe = require('./Recipes/newRecipe');
const diet = require('./Diets/diets');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipes)
router.use('/recipe', recipe)
router.use('/types',diet)

module.exports = router;
