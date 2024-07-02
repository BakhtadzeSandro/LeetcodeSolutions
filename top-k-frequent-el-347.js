var topKFrequent = function (nums, k) {
  let obj = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num] > 0) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedArr.length; i++) {
    if (i == k) {
      break;
    } else {
      result.push(Number(sortedArr[i][0]));
    }
  }
  return result;
};
