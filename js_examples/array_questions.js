let numbers3 = [1, 2, 3, 4, 5];

let sum = 0;

numbers3.forEach((v) => (sum += v));

console.log(sum / numbers3.length);

console.log("******************************");

numbers3.forEach((a) => console.log(a ** 2));

console.log("******************************");

let numbersKareCift = numbers3
  .map((x) => x ** 2)
  .filter((cift) => cift % 2 !== 1);

console.log(numbersKareCift);

console.log("******************************");

let reversed = [];
numbers3.forEach((x) => {
  reversed.unshift(x);
});

console.log(reversed);

console.log("******************************");

let words = ["JavaScript", "Python", "Java", "C++"];
let reversedWords = words.map((x) => x.split("").reverse().join(""));
console.log(reversedWords);

console.log("******************************");

const numbers = [0, 1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((even) => even % 2 == 0);
//Write your Code here
console.log(evenNumbers); // [0, 2, 4]
console.log("******************************");

let arrs = [1, 2, 3, 4, 5];

arrs.ma