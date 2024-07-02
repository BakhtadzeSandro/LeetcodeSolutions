var missingNumber = function (nums) {
  let length = nums.length;
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (i != 0 && nums[i] - nums[i - 1] == 2) {
      result = nums[i] - 1;
    }
  }
  if (nums[length - 1] != length) {
    return length;
  } else {
    return result;
  }
};
