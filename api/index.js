//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Recipe, Diet } = require("./src/db.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  })
  .then(() => {
    var glutenFree = Diet.create({ name: "gluten free" });
    var Ketogenic = Diet.create({ name: "ketogenic" });
    var lactoVegetarian = Diet.create({ name: "lacto vegetarian" });
    var lactoOvoVegetarian = Diet.create({ name: "lacto ovo vegetarian" });
    var ovoVegetarian = Diet.create({ name: "ovo vegetarian" });
    var vegan = Diet.create({ name: "vegan" });
    var pescetarian = Diet.create({ name: "pescatarian" });
    var paleo = Diet.create({ name: "paleo" });
    var paleolithic = Diet.create({ name: "paleolithic" });
    var primal = Diet.create({ name: "primal" });
    var whole30 = Diet.create({ name: "whole 30" });
    var foodmap = Diet.create({ name: "fodmap friendly" });
    var dairy = Diet.create({ name: "dairy free" });

    Promise.all([
      glutenFree,
      Ketogenic,
      lactoVegetarian,
      ovoVegetarian,
      vegan,
      pescetarian,
      paleo,
      primal,
      whole30,
      lactoOvoVegetarian,
      paleolithic,
      foodmap,
      dairy,
    ]).then((res) => {
      console.log("Dietas precargadas");
    });
  })
  .catch (err => {
    console.log("Ha ocurrido algo. Verifique el motivo del error para continuar")
    console.log(err.message)
  })
