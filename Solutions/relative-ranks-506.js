var findRelativeRanks = function (score) {
  let newArr = [...score];
  let newArrSorted = score.sort((a, b) => (a > b ? -1 : 1));
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArrSorted.indexOf(newArr[i]) + 1 == 1) {
      result.push("Gold Medal");
    } else if (newArrSorted.indexOf(newArr[i]) + 1 == 2) {
      result.push("Silver Medal");
    } else if (newArrSorted.indexOf(newArr[i]) + 1 == 3) {
      result.push("Bronze Medal");
    } else {
      result.push(String(newArrSorted.indexOf(newArr[i]) + 1));
    }
  }
  return result;
};
