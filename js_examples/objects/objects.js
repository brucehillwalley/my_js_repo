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
const cars = ["Audi", "BMW", "Anadol"];
const brand = ["Q8", "3 20", "Lux"];
const engine = [4000, 2000, 1600];
const speed = [8, 7, 4];
const power = ["hybrid", "electricity", "Fuel+LPG"];

console.log(cars[0], brand[0], engine[0]);

const carObject = {
  brand: "Audi",
  model: "Q8",
  engine: "4000",
  speed: "8",
  power: "hybrid",
};

//? objelere eerişimde dot notasyonu
console.log("******* Objects *********");
console.log(carObject.car);
console.log(carObject.brand);
console.log(carObject.model);

console.log(carObject.Model);

console.log("******* Objects *********");

//? Square bracket yontemi
console.log(carObject["model"]);
console.log(carObject["power"]["fosil"]);

//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erisimlerinde kullanılabilir.
// const key = prompt(
//   "Aracin hangi bilgisini ogrenmek istersiniz, marka, model,motor,vites ?"
// )

// console.log(arac[key])

carObject.model = "Q3";
carObject["power"]["fosil"] = "Mazot";
console.log(carObject);

//? Uncaught TypeError: Assignment to constant variable.
// carObject = [4, 3, 2]

carObject.sunroof = true;
console.log(carObject);

console.log("******* Objects *********");

/* -------------------------------------------------------------------------- */
/*                              OBJECT METOTLARI                              */
/* -------------------------------------------------------------------------- */
const dogum = 2000;
const personel = {
  adi: "ahmet",
  soyadi: "balcı",
  dogum: 1990,
  maas: 1500,
  ehliyet: true,
  diller: ["English", "German"],
  yasHesapla: function () {
    console.log(this); //personeli görür
    return new Date().getFullYear() - this.dogum; //?personel.dogum kullanılabilir ama best practice this dir
  },
  // ozet:()=>{
  //     console.log(this);
  //     `${this.adi} ${this.soyadi} ${this.yasHesapla()} yasindadir` //? arrow da this kullanılmaz.
  // }
  ozet: function () {
    console.log(this);
    return `${this.adi} ${this.soyadi} ${this.yasHesapla()} yasindadir`; //? arrow da this kullanılmaz.
  },
};
console.log(this); //window objesini görör
console.log(personel.yasHesapla());
console.log(personel.ozet());
console.log(this); //window objesini görör


//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

/* -------------------------------------------------------------------------- */
/*                                    JSON                                    */
/* -------------------------------------------------------------------------- */

const people = {
  ahmet: {
    adi: "Ahmet",
    soyadi: "Can",
  },
  canan: {
    adi: "Canan",
    soyadi: "Can",
  },
};

const peopleJSON=[{adi:"Ahmet",soyadi:"Can"},{adi:"Canan",soyadi:"Can"}]
console.log(peopleJSON[0].adi);

const team = [
    { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
    { name: "Mary", surname: "Bary", job: "tester", age: 22 },
    { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
  ]
console.log("****************************");
  team.forEach((t)=>console.log(t.job))

const names= team.map((t)=>t.name)
console.log(names);

const totalAge=team.reduce((acc,p)=>acc+p.age,0)
console.log(totalAge);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const concatinatedNames=team.map((p)=>{

    return {
        fullName:`${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
        age:p.age+5
    }
})

//? aşağıdakini daha çok tercih ediyor hoca parentezle single statement yaptı.
const concatinatedNames1=team.map((p)=>(

     {
        fullName:`${p.name.toLowerCase()} ${p.surname.toUpperCase()}`,
        age:p.age+10
    })
)

console.log(concatinatedNames);
console.log(concatinatedNames1);


/* -------------------------------------------------------------------------- */
//*                                  POSTCLASS                                 */
/* -------------------------------------------------------------------------- */