const fib = (n) => {
  //   if (n === 0 || n === 1) {
  //     return 1;
  //   } else {
  //     return fib(n - 1) + fib(n - 2);
  //   }
  switch (n) {
    case 0:
    case 1:
      return 1;
    default:
      return fib(n - 1) + fib(n - 2);
  }
};

if (process.argv.length < 3) {
  console.log("usage: node 2.js < fubonacii index >");
} else {
  let index = parseInt(process.argv[2]);
  if (isNaN(index) || index < 0) {
    console.log("index must be a positive integer");
  } else {
    console.log(fib(index));
  }
}

// console.log(fib(3));
// console.log(fib(5));
// console.log(fib(8));
//console.log(process.argv);
