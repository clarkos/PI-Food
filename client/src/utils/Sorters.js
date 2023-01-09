const dynSort = (num, property) => {
  if (property === "name") {
    return (a, b) => {
      if (num === 1) return a[property] - b[property];
      return b[property] - a[property];
      }
  } else {
    return (a, b) => {
      if (num === 1) return b[property].localeCompare(a[property]);
      return a[property].localeCompare(b[property]);
      }
    };
  };

const sortName = (num, array) => {
  if (num !== 1 && num !== -1) return console.log("first arg must be 1 or -1");
  return array.sort(dynSort(num, "name"));
};

const sortScore = (num, array) => {
  if (num !== 1 && num !== -1) return console.log("first arg must be 1 or -1");
  return array.sort(dynSort(num, "score"));
};

export { sortName, sortScore };