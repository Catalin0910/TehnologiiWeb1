const sampleDictionary = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
];

const sampleString = `
  best
  read
  on
  windy
  nights
`;

const checkAcrostih = (input, dictionary) => {
  const lines = input.split("\n");
  let target = "";
  for (const line of lines) {
    if (line.trim()) {
      target += line.trim()[0];
    }
  }
  if (dictionary.indexOf(target) !== -1) return true;
  else return false;
};

console.log(checkAcrostih(sampleString, sampleDictionary));
