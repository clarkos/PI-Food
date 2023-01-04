const router = require("express").Router();
const Sequelize = require("sequelize");
const { Recipe, Diet } = require("../../db");
const { allAPI, recipeName, recipeId } = require("../../utils/recipesCalls");
const { dietIndexer } = require("../controllers/dietIndexer");
const Op = Sequelize.Op;
const RecipeFormater = require("../controllers/FormatRecipe");

router.get("/", async function (req, res) {
  let response;
  //verifica si hay query, si no lo hay busca todas las recetas
  if (!req.query.name) {
    try {
      let dbResult = await Recipe.findAll({
        include: [{ model: Diet, through: { attributes: [] } }],
      });

      let dbFormated = [];
      dbResult.map((e) => {
        let diets = e["diets"];
        let formated = [];
        diets.map((d) => formated.push(d["name"]));
        let obj = RecipeFormater(e.id, e.name, e.score, e.image, formated);
        dbFormated.push(obj);
      });

      //buscando en la API
      let apiResult = await allAPI();
      if (apiResult == null) return res.json({ message: "key over-used" });

      //agregando recetas desde la base de datos
      dietIndexer(apiResult);
      //contando el total de recetas --> api+db
      let total = dbFormated.concat(apiResult);

      //en caso que no haya recetas con ese nombre
      if (total.length === 0)
        res.json({
          message:
            "Can't find nothing... there are some problem with the API connection",
        });
      res.json(total);
    } catch (error) {
      console.log("error in get from api");
    }
  } else {
    let { name } = req.query; //siempre va a haber un valor por que se verifica en el front
    try {
      //buscando en DB
      let dbResult = await Recipe.findAll({
        where: { name: { [Op.like]: `%${name}%` } },
        include: [
          { model: Diet, attributes: ["name"], through: { attributes: [] } },
        ],
      });

      let dbFormated = []; // formateando la respuesta
      dbResult.map((e) => {
        let diets = e["diets"];
        let formated = [];
        diets.map((d) => formated.push(d["name"]));
        let obj = RecipeFormater(e.id, e.name, e.score, e.image, formated);
        dbFormated.push(obj);
      });

      //buscando en la API
      let apiResult = await recipeName(name);
      if (apiResult == null) return res.json({ message: "key over-used" });

      //agregando recetas desde la base de datos
      dietIndexer(apiResult);

      //contando el total de recetas --> api+db
      let total = dbFormated.concat(apiResult);

      //en caso que no haya recetas con ese nombre
      if (total.length === 0)
        res.json({
          message: "Can't find nothing... Are you sure it' well written?",
        });

      res.json(total);
    } catch (error) {
      console.log("error getting by 'recipe name'");
    }
  }
});

router.get("/:id/", async function (req, res) {
  try {
    let { id } = req.params;

    if (
      id.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      )
    ) {
      //busqueda en la base de datos
      let dbResult = await Recipe.findOne({
        where: { id: id },
        include: [
          { model: Diet, attributes: ["name"], through: { attributes: [] } },
        ],
      });
      if (dbResult === null)
        return res.json({
          message: "Can't find nothing... The ID is correct?",
        }); //envia mensaje si no encuentra resultados

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
      //Busqueda en la API
      let apiResult = await recipeId(id);
      return apiResult.length === 0
        ? res.json({ message: "error getting by 'ID'" })
        : res.json(apiResult);
    }
  } catch (error) {
    console.log("error looking for ID", error.message);
  }
});

module.exports = router;
