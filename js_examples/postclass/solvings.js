console.log("1*************SOLVINGS***********");
let examplestring = "The quick brown fox";
let expectedOutput = 5;

let vowels = ["a", "e", "i", "o", "u"];

console.log(
  examplestring
    .toLowerCase()
    .split("")
    .filter((harf) => vowels.includes(harf)).length === expectedOutput
);

console.log("2*************SOLVINGS***********");

let isPrime = (number) => {
  let result = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
      break;
    }
  }
  return result;
};

console.log(isPrime(5));

console.log("3*************SOLVINGS***********");
//* 12. Write a JavaScript function that checks whether a number is perfect.
//*According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
//*Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

let sampleNumber = 8128;

let isPerfect = (number) => {
  let result = false;
  let positiveDivisors = [];
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      positiveDivisors.push(i);
    }
  }
  return number == positiveDivisors.reduce((sum, divisor) => sum + divisor, 0);
};

console.log(isPerfect(sampleNumber));

console.log("4*************SOLVINGS***********");

//*13. Write a JavaScript function to compute the factors of a positive integer.

let fact=(number)=>{
    if (number==1) {
        return 1
        
    }
    return number*fact(number-1)
}

console.log(fact(6));


console.log("5*************SOLVINGS***********");


/* 7 

Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

*/

// let exampleString = 'The quick brown fox';
// let expectedOutput = 5;

// let vowels = ["a", "e", "i", "o", "u"];

// console.log(exampleString.toLowerCase().split("").filter((harf) => vowels.includes(harf)).length === expectedOutput)

/* 8

Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

*/

// let isPrime = (number) => {

//     let result = true;

//     for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
//         if (number % i == 0) {
//             result = false;
//             break;
//         }
//     }

//     return result;
// }

// console.log(isPrime(123131231241));

/* 9

Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

*/

// let whichType = (arg) => {
//     return typeof arg;
// };

// console.log(whichType([]))
// console.log(whichType(Boolean(5)));
// console.log(whichType(whichType));
// console.log(whichType(5));
// console.log(whichType("5"));
// console.log(whichType([].forEach((e) => e)));

/* 10

Write a JavaScript function which returns the n rows by n columns identity matrix.

*/

// let identityMatrix = (number) => {

//     let result = [];

//     for (let i = 0; i < number; i++) {

//         let row = [];

//         for (let j = 0; j < number; j++) {

//             row.push(1);

//         }
//         result.push(row)
//     }

//     return result;
// }

// console.log(identityMatrix(5));

/* 11

Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4

*/

// let sampleArray = [1, 2, 3, 4, 5, 123, 1232312, 212, 2, 3790, -5];
// let expectedOutput = [2, 4]

// console.log(sampleArray.sort((a, b) => a - b)[1], sampleArray.sort((a, b) => a - b)[sampleArray.length - 2])

/* 12

Write a JavaScript function that checks whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

*/

// let sampleNumber = 28;

// let isPerfectNumber = (number) => {
//     let positivDivisors = [];

//     for (let i = 1; i < number; i++) {
//         if (number % i == 0) {
//             positivDivisors.push(i);
//         }
//     }

//     return number == positivDivisors.reduce((sum, divisor) => sum + divisor, 0);
// }

// console.log(isPerfectNumber(sampleNumber));

/* 13

Write a JavaScript function to compute the factors of a positive integer.

*/

// let fact = (number) => {
//     if (number == 1) {
//         return 1;
//     }
//     return number * fact(number - 1)
// }
// console.log(fact(6));

/* 14

Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

*/

// let amountTocoins = (number) => {
//     let result = {};
//     let coins = [100, 50, 25, 10, 5, 2, 1];

//     while (number > 0) {
//         for (let i = 0; i < coins.length; i++) {
//             if (number - coins[i] >= 0) {
//                 result.hasOwnProperty(coins[i] + " cent") ? result[coins[i] + " cent"]++ : result[coins[i] + " cent"] = 1;
//                 number -= coins[i];
//                 break;
//             }
//         }
//     }
//     return result;
// }

// console.log(amountTocoins(74))
// console.log(Object.values(amountTocoins(74)).reduce((sum, coin) => sum + coin, 0) + " adet coine ihtiyaç var.")

var sayilar = Array.from({length: 100}, (_, index) => index + 1);

console.log(sayilar);