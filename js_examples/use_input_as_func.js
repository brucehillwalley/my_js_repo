let num1 = 5,
  num2 = 10,
  operation = "mult";
const myFunctions = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
};
console.log(myFunctions[operation](num1, num2));