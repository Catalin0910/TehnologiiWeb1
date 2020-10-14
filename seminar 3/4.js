const sampleString = "the quick brown,fox jumps over the lazy dog";

const getCounts = (input) => {
  const items = input.split(/[,\s]/);
  const result = {};
  for (const item of items) {
    if (item in result) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  for (const word in result) {
    result[word] /= items.length;
  }
  return result;
};

console.log(getCounts(sampleString));
