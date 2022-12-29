const router = require("express").Router();
const Sequelize = require("sequelize");
const { Recipe, Diet } = require("../../db");
const { recipeName, recipeId } = require("../axios/recipesAxios");
const { FoCDietG } = require("../controllers/dietFoC");
const Op = Sequelize.Op;
const RecipeFormater = require("../controllers/FormatRecipe");

router.get("/", async function (req, res) {
  let { name } = req.query;

  if (!name || name === "" || name === " ")
    return res.status(200).json({ message: "must send a valid name in query" });

  try {
    //finding in database
    let dbResult = await Recipe.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: [
        { model: Diet, attributes: ["name"], through: { attributes: [] } },
      ],
    });

    let dbFormated = [];

    dbResult.map((e) => {
      let diets = e["diets"];
      let formated = [];
      diets.map((d) => formated.push(d["name"]));
      let obj = RecipeFormater(e.id, e.name, e.score, e.image, formated);
      dbFormated.push(obj);
    });

    //finding in API
    let apiResult = await recipeName(name);

    if (apiResult == null) return res.json({ message: "key over-used" });

    //adding found diets to DB
    FoCDietG(apiResult);

    //total recievies up to 100 results from API + results from DB
    let total = dbFormated.concat(apiResult);
    // let total = dbFormated

    //if theres no recipe with that name
    if (total.length === 0)
      return res.json({ message: "couldnt find any results" });

    res.json(total);
  } catch (error) {
    console.log("error in get ");
  }
});

router.get("/:id/", async function (req, res) {
  try {
    let { id } = req.params;
    //DB uses UUIDV1 => find if format is number or UUID

    if (
      id.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      )
    ) {
      //if UUID search in DB, if no results send message
      let dbResult = await Recipe.findOne({
        where: { id: id },
        include: [
          { model: Diet, attributes: ["name"], through: { attributes: [] } },
        ],
      });
      if (dbResult === null)
        return res.json({ message: "error finding with id" });

      let formated = [];
      dbResult.diets.map((e) => formated.push(e["name"]));

      let obj = {
        id: dbResult["id"],
        name: dbResult["name"],
        score: dbResult["score"],
        image: dbResult["image"],
        diets: formated,

        summary: dbResult["summary"],
        healthScore: dbResult["healthScore"],
        steps: dbResult["steps"],
        dishTypes: dbResult["dishTypes"],
      };

      return res.json(obj);
    } else {
      //format isnt UUID, find in API
      let apiResult = await recipeId(id);
      return apiResult.length === 0
        ? res.json({ message: "error finding with id" })
        : res.json(apiResult);
    }
  } catch (error) {
    console.log("error getting by ID",error);
  }
});

module.exports = router;
