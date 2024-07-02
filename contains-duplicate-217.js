var containsDuplicate = function (nums) {
  let set = new Set(nums);
  set = Array.from(set);
  if (nums.length == set.length) {
    return false;
  } else {
    return true;
  }
};
