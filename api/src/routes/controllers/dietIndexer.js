const { Diet } = require("../../db");

function dietIndexer(obj) {
  try {
    let group = [];
    obj.forEach(async (e) => {
      let diet = e.diets ? e.diets : e.diet;
      for (let i = 0; i < diet.length; i++) {
        let formatedName = diet[i].toLowerCase().replace(/-/g, " ");
        if (!group.includes(formatedName)) {
          group.push(diet[i]);
        }
      }
    });

    group.map(async (e) => {
      await Diet.findOrCreate({ where: { name: e } });
    });
  } catch (error) {
    console.log("error in dietIndexer", error);
  }
}

module.exports = { dietIndexer };
