const dynamicSort1 = (num, property) => {
  return function (a, b) {
    if (num === 1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
};

const sortName = (num, array) => {
  if (num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
  return array.sort(dynamicSort1(num, "name"));
};

const dynamicSort2 = (num, property) => {
  return function (a, b) {
    if (num === 1) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  };
}

const sortScore = (num, array) => {
  if (num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
  return array.sort(dynamicSort2(num, "score"));
};

export { sortName, sortScore }