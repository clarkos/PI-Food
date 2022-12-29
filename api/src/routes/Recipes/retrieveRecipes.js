const router = require("express").Router();
const Sequelize = require("sequelize");
const { Recipe, Diet } = require("../../db");
const { allAPI, recipeName, recipeId } = require("../axios/recipesAxios");
const { FoCDietG } = require("../controllers/dietFoC");
const Op = Sequelize.Op;
const RecipeFormater = require("../controllers/FormatRecipe");

router.get("/", async function (req, res) {
    
  if (!res.query){  //verifica si hay query, si no lo hay busca todas las recetas
    try {
    let dbResult = await Recipe.findAll({
      include: [
        { model: Diet, through: { attributes: [] } },
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

    //buscando en la API
    let apiResult = await allAPI();
    if (apiResult == null) return res.json({ message: "key over-used" });

    //agregando recetas desde la base de datos
    FoCDietG(apiResult);
  } catch (error){
    console.log("error in get from api")
  }
  }
  
  // si se habilito el query busca por nombre y verifica
  let { name } = req.query;
  if (!name || name === "" || name === " ")
    return res.status(200).json({ message: "must send a valid name in query" });
  try {
    //buscando en DB
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

    //buscando en la API
    let apiResult = await recipeName(name);
    if (apiResult == null) return res.json({ message: "key over-used" });

    //agregando recetas desde la base de datos
    FoCDietG(apiResult);

/* ######################## hay que terminar esta parte ##################################### */


    //contando el total de recetas --> api+db
    let total = dbFormated.concat(apiResult);
    // let total = dbFormated

    //en caso que no haya recetas con ese nombre
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
    //verifica el formato, 
    //si es uuid busca en la base de datos
    //si es nro busca en la api

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
        return res.json({ message: "error finding with id" }); //envia mensaje si no encuentra resultados

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
    } else {  //Busqueda en la API
      let apiResult = await recipeId(id);
      return apiResult.length === 0
        ? res.json({ message: "error finding with id" })
        : res.json(apiResult);
    }
  } catch (error) {
    console.log("error looking for ID", error);
  }
});

module.exports = router;
