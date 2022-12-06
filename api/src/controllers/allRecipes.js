const getApi = require ('./apiInfo.js');
const getDb = require ('./dbInfo');

const getAllRecipes = async() => {
  const apiInfo = await getApi();
  const dbInfo = await getDb();
  const totalInfo = apiInfo.concat(dbInfo);

  return totalInfo;
}

module.exports = getAllRecipes;