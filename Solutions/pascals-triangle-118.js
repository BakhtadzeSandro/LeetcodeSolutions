var generate = function (numRows) {
  let result = [];
  let currentArr = [];
  let emptyBoxes = 0;

  if (numRows === 1) {
    result = [[1]];
    return result;
  } else if (numRows === 2) {
    result = [[1], [1, 1]];
    return result;
  } else if (numRows > 2) {
    result = [[1], [1, 1]];
    for (let i = 3; i <= numRows; i++) {
      emptyBoxes = i - 2;
      currentArr = new Array(i);
      currentArr[0] = 1;
      currentArr[i - 1] = 1;
      for (let j = 0; j < emptyBoxes; j++) {
        let newNumber =
          result[result.length - 1][j] + result[result.length - 1][j + 1];
        currentArr.splice(j + 1, 1, newNumber);
      }
      result.push(currentArr);
      emptyBoxes = 0;
      currentArr = [];
    }
  }
  return result;
};
