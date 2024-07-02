var removeElement = function (nums, val) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[i] == val) {
        nums.splice(i, 1);
      }
    }
  }
  return nums.length;
};
