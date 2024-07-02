function reverseVowels(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newArr = [];
  let newStr = s;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (s[i] == vowels[j]) {
        newArr.push(s[i]);
        newStr = newStr.replace(s[i], "%");
      }
    }
  }
  newArr.reverse();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == "%") {
      newStr = newStr.replace(newStr[i], newArr[counter]);
      counter++;
    }
  }
  return newStr;
}
