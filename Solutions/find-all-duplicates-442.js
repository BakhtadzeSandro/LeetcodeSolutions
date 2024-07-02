var findDuplicates = function (nums) {
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
  for (const [key, value] of Object.entries(obj)) {
    if (value === 2) {
      result.push(key);
    }
  }
  return result;
};
