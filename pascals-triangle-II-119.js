var getRow = function (rowIndex) {
  let result = [];
  let currentArr = [];
  let emptyBoxes = 0;

  if (rowIndex === 0) {
    result = [1];
    return result;
  } else if (rowIndex === 1) {
    result = [1, 1];
    return result;
  } else if (rowIndex > 1) {
    result = [[1], [1, 1]];
    for (let i = 3; i <= rowIndex + 1; i++) {
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
      console.log(result);
    }
  }
  return result[rowIndex];
};
