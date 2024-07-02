var halvesAreAlike = function (s) {
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let firstHalf = s.slice(0, s.length / 2);
  let secondHalf = s.slice(s.length / 2, s.length);
  let firstCounter = 0;
  let secondCounter = 0;
  for (let i = 0; i < firstHalf.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (firstHalf[i] == vowels[j]) {
        firstCounter = firstCounter + 1;
      }
    }
  }
  for (let i = 0; i < secondHalf.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (secondHalf[i] == vowels[j]) {
        secondCounter = secondCounter + 1;
      }
    }
  }
  if (firstCounter == secondCounter) {
    return true;
  } else {
    return false;
  }
};
