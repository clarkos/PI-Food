const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  searchForId,
  searchForName,
  searchTypes,
  addRecipe,
  searchAll,
  addDiet,
  searchForDiets,
} = require("./utils.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes", async (req, res) => {
  const { name } = req.query;

  if (name) {
    const recipe = await searchForName(name.toLowerCase());
    if (recipe) return res.json(recipe);
    return res.status(404).json({ msg: "We're so sorry, name is not valid" });
  } else {
    const recipes = await searchAll();
    return res.status(200).json(recipes);
  }
});

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const recipeInfo = await searchForId(id);
  if (recipeInfo) return res.json(recipeInfo);

  return res.status(404).json({ msg: "We're so sorry, id is not valid" });
});

router.get("/recipes/diet/:type", async (req, res) => {
  const { type } = req.params;
  const recipeDiet = await searchForDiets(type);

  if (recipeDiet) return res.json(recipeDiet);

  return res
    .status(404)
    .json({ msg: "We're so sorry, diet type is not valid" });
});

router.get("/types", async (req, res) => {
  const diets = await searchTypes();
  return res.status(200).json(diets);
});

router.post("/recipe", async (req, res) => {
  const { title, summary, score, healthScore, instructions, diet } = req.body;
  if (!title || !summary || !(diet.length >= 1)) return res.status(404).json({ msg: "fail elements" });
  await diet.forEach(async (d) => await addDiet(d));
  await addRecipe(title, summary, score, healthScore, instructions, diet);
  return res.status(200).json({ msg: "created complete" });
});

module.exports = router;
