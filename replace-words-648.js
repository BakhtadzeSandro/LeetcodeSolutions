var replaceWords = function (dictionary, sentence) {
  let matchings = {};
  let possibleRoots = [];
  let sentenceArray = sentence.split(" ");
  for (let i = 0; i < sentenceArray.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (sentenceArray[i].startsWith(dictionary[j])) {
        possibleRoots.push(dictionary[j]);
        matchings[sentenceArray[i]] = possibleRoots;
      }
    }
    possibleRoots = [];
  }
  for (const [key, value] of Object.entries(matchings)) {
    if (sentenceArray.includes(key)) {
      if (value.length > 1) {
        let shortest = value.reduce(function (a, b) {
          return a.length < b.length ? a : b;
        });
        let firstIndex = sentenceArray.indexOf(key);
        let lastIndex = sentenceArray.lastIndexOf(key);
        if (firstIndex != lastIndex) {
          for (let i = firstIndex; i <= lastIndex; i++) {
            sentenceArray[i] = shortest;
          }
        } else {
          sentenceArray[firstIndex] = shortest;
        }
      } else {
        let index = sentenceArray.indexOf(key);
        sentenceArray[index] = value[0];
      }
    }
  }
  return sentenceArray.join(" ");
};
