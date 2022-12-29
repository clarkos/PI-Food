const filterByDiet = (diet, array) => {
  let result = array.filter((e) => e["diets"].includes(diet));
  return result;
};

export default filterByDiet;
