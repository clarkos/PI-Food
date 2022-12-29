function dynamicSort(num, property) {
  return function (a, b) {
    if (num === 1) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  };
}

const sortByScore = (num, array) => {
  if (num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
  return array.sort(dynamicSort(num, "score"));
};

export default sortByScore;