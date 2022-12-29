
const dynamicSort = (num, property) => {
  return function (a, b) {
    //   console.log(`a[property]`, a[property])
    //   console.log(`b[property]`, b[property])
    if (num === 1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
};

const sortByName = (num, array) => {
  if (num !== 1 && num !== -1) return console.log('first arg must be 1 or -1');
  return array.sort(dynamicSort(num, "name"));
};

export default sortByName;
