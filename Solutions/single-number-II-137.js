var singleNumber = function (nums) {
  let resultObj = {};
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (resultObj[element] > 0) {
      resultObj[element]++;
      if (resultObj[element] > 2) {
        delete resultObj[element];
      }
    } else {
      resultObj[element] = 1;
    }
    result = resultObj[element];
  }
  return Object.keys(resultObj)[0];
};
