const axios = require('axios');

const getApiById = async (id) => {
  const { FOOD_KEY } = process.env;
  return await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?${FOOD_KEY}`
  )
}

module.exports = getApiById;