const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8];

const sampleTransformation = (x) => x * 2;

const map = (a, t) => {
  const newArray = [];
  for (const element of a) {
    newArray.push(t(element));
  }
  return newArray;
};

console.log(map(sampleArray, sampleTransformation));
console.log(map(["cat", "bear", "tiger"], (x) => x.length));
