const checkPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

console.log(checkPrime(13));
console.log(checkPrime(17));
console.log(checkPrime(27));
