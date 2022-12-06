const axios = require('axios');
const { FOOD_KEY } = process.env;

const getApiById = async (id) => {
  return await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?${FOOD_KEY}`
  )
}

module.exports = getApiById;