const { Recipe } = require("../db");

const getDBById = async(id) => {
  return await Recipe.findbyPk(id, {
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })
}

module.exports = getDBById;