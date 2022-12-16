const { axios } = require ("axios");
// const { FOOD_KEY } = require("process.env");

const FOOD_KEY = '68a73a5548054ad6abfc0309def17680';

const apiCallID = async (idRecipe) => {
  const options = {
    method: "GET",
    url: `https://api.spoonacular.com/recipes/${idRecipe}/information`,
    params: { apiKey: FOOD_KEY },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};


module.exports = apiCallID;