var searchRange = function (nums, target) {
  let result = [];
  let startingIndex = 0;
  let endingIndex = 0;
  let resultOfZero = [-1, -1];
  if (nums.includes(target) == false) {
    return resultOfZero;
  } else {
    startingIndex = nums.indexOf(target);
    for (let num of nums) {
      if (num > target) {
        endingIndex = nums.indexOf(num) - 1;
        break;
      } else {
        endingIndex = nums.length - 1;
      }
    }
    result.push(startingIndex, endingIndex);
  }
  return result;
};
