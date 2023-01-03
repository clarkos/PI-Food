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
      console.log("Server is listening at 3001"); // eslint-disable-line no-console
    });
  })
  .then(() => {
    const dietPreload = [
      "gluten free",
      "ketogenic",
      "Vegetarian",
      "lacto vegetarian",
      "lacto ovo vegetarian",
      "ovo vegetarian",
      "vegan",
      "pescatarian",
      "paleolithic",
      "primal",
      "whole 30",
      "fodmap friendly",
      "dairy free",
    ];

    const preLoad = new Promise((resolve, reject) => {
      dietPreload.forEach((item) => {
        Diet.create({ name: item });
      })
      resolve("Succesfull");
    })
      
    preLoad.then((done) => {
      console.log(`preload ${done}`)
    })
  })
  .catch((err) => {
    console.log("Preload can't be done...");
    console.log(err.message);
  });