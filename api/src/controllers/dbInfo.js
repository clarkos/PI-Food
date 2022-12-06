const { Recipe } = require("../db");

const getDBInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })
}

module.exports = getDBInfo;