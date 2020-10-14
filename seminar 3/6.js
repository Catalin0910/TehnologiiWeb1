const sampleString = "i found a {0} at the {1}";
const sampleFormat = ["car", "dealership"];

const formatString = (input, format) => {
  let result = input;
  for (let i = 0; i < format.length; i++) {
    result = result.replace("{" + i + "}", format[i]);
  }
  return result;
};

console.log(formatString(sampleString, sampleFormat));
// i found a car at the dealership
