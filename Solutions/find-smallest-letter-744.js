var nextGreatestLetter = function (letters, target) {
  let counter = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    } else {
      counter++;
      if (counter == letters.length) {
        return letters[0];
      }
    }
  }
};
