// //* value IIM function

/* -------------------------------------------------------------------------- */
//!                                  PRECLASS                                  */
/* -------------------------------------------------------------------------- */

// let num1 = 5,
//   num2 = 10,
//   operation = "mult"; //? burada prompla da alabiliriz.
// const myFunctions = {
//   sum: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   mult: (a, b) => a * b,
//   div: (a, b) => a / b,
// };
// console.log(myFunctions[operation](num1, num2));
// console.log(myFunctions["sum"](74500, 4580000));

// console.log("******* Objects *********");
// const person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(firstName + " " + lastName);
//   };
//    this.greet2 = function() { console.log('hello2')};
// }

// const person = new Person("john", "doe");
// // Person("john", "doe")
// // console.log(person);

// person.age = 30;
// console.log(person);
// person.fullName();

// delete person.age
// console.log(person);
// person.greet2()

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     // return this.firstName + " " + this.lastName;
//     // or using template lateral notation
//     return `${this.firstName} ${this.lastName}`;
//   },
//   greet: function () {
//     console.log("hello");
//   },
//   greet2: () => {
//     console.log("hello2");
//   },
// };
// console.log(person.fullName()); // John Doe
// person.greet(); // hello
// person.greet2(); // hello2
// console.log("******* Objects *********")

// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// const person = new Person();
// // checking the prototype value
// console.log(Person.prototype); // { ... }

/* -------------------------------------------------------------------------- */
//!                                  INCLASS                                  */
/* -------------------------------------------------------------------------- */

//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");
const cars=["Audi","BMW","Anadol"]
const brand= ["Q8","3 20", "Lux"]
const engine=[4000,2000,1600]
const speed=[8,7,4]
const power=["hybrid","electricity","Fuel+LPG"]

console.log(cars[0], brand[0],engine[0]);

const carObject={
    brand:"Audi",
    model:"Q8",
    engine:"4000",
    speed:"8",
    power:"hybrid"

}

//? objelere eerişimde dot notasyonu
console.log("******* Objects *********");
console.log(carObject.car)
console.log(carObject.brand)
console.log(carObject.model)

console.log(carObject.Model);

console.log("******* Objects *********");

//? Square bracket yöntemi
console.log(arac["model"]);



const key =prompt()