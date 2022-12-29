const RecipeFormater = function (id, name, score, image, diets) {
  let obj = {
    id: id,
    name: name,
    image: image,
    score: score,
    diets: diets,
  };

  return obj;
};

module.exports = RecipeFormater;
