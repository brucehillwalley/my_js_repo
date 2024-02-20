let node = "NodeJS";
console.log("selam");
console.log("ibrahim");
console.log(`------*------
    ${node}
------*------`);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log((0.1 + 0.2).toFixed(2) === "0.30"); // Output: true
console.log(`------*------`);
console.log(1 < 2 < 3);
console.log(true < 3);
console.log(3 > 2 > 1);
console.log(true > 1);
console.log(`------*------`);

// let sum = 0;
// const prompt = require("prompt-sync")();
// let number = parseInt(prompt("Enter a number: "));

// while (number >= 0) {
//   // Add all positive numbers
//   sum += number;

//   console.log(`The sum is ${sum}.`);
//   // Take input again if the number is positive
//   number = parseInt(prompt("Enter a number: "));
// }

// const prompt = require("prompt-sync")({sigint:true})
// const name = prompt('What is your name? ');
// console.log("Hello " + name);

//? 4.
console.log(null == undefined);
console.log(null === undefined);
console.log(isNaN(2 + null));
console.log(typeof (2 + null));
console.log(isNaN(2 + undefined));
null ? console.log("true") : console.log("false");

console.log(`------*------`);
var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
  while (hash.length != count) hash += "#";
  hash += "\n";
  count += n;
  n++;
}
console.log(hash);
console.log(`------*------`);
let firstName = null;
let lastName = null;
let nickName = "coderBond";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
console.log(firstName || lastName || nickName || "Anonymous");
console.log(`------*------`);
function onZoom(x) {
  console.log("Zoom active for", x);
}
function startClass(x, y, z) {
  console.log(" Class starts at", x);
  y(z);
}
startClass("20:00", onZoom, "FS");
console.log(`------*------`);
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(5)
);
console.log(`------*------`);
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {

//         console.log(x);
//         var x=1
//     }
//     console.log(x);

// })();
console.log(`------*------`);

let a = [10, 20, 30];
a[10] = 100;
console.log(a);
let b = [undefined];
b[2] = 1;
console.log(b);
console.log(b.map((e) => 99));
console.log(a.map((e) => 99));

// [ 10, 20, 30, <7 empty items>, 100 ]
// [ undefined, <1 empty item>, 1 ]
// [ 99, <1 empty item>, 99 ]
//? 99 u empty itemleri doldurmaz.
console.log(`------*------`);
class Employee {
  constructor(id=1, name="ibrahim") {
    this.id = id;
    this.name = name;
  }
  detail() {
    console.log(this.id + " " + this.name);
  }
}
let e1 = new Employee(10, "Qadir Adamson");
let e2 = new Employee("Victor Hug");
let e3 = new Employee(12);
e1.detail();
e2.detail();
e3.detail();
console.log(`------*------`);