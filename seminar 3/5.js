const sampleString = "the quick brown fox,jumps over the lazy dog";

const getLetterFrequencies = (input) => {
  const result = {};
  const punctuation = [" ", ","];
  for (const letter of input) {
    if (punctuation.indexOf(letter) === -1) {
      if (letter in result) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }

  for (const letter in result) {
    result[letter] /= input.length;
  }

  return result;
};

console.log(getLetterFrequencies(sampleString));
