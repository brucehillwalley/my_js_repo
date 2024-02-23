//? 1. In the table below specifies the key differences between a front-end and back-end development.
//?Indicate at the beginning of each item whether it is suitable for the front end or the back end.

//! Front-end is refers to the client-side of an application.
//! Front-end includes everything that attributes to the visual aspects of  a web application.
//! Back-end refers to the server-side of an application.
//! Front-end  technologies are HTML, CSS, Bootstrap, jQuery, JavaScript, AngularJS, and React.js.
//! generally includes a web server that communicates with the database to serve the users' requests
//! Front-end some framework examples are AngularJS, React.js, jQuery, Sass, etc
//! Back-end consists of everything that happens behind the scenes and users cannot see and interact with.
//! Frontend is the part of a web application where users can see and interact.
//! Back-end technologies are Java, PHP, Python, C++, Node.js, etc.
//! Back-end some framework examples are Express-js, Django-python, Rails-ruby, Laravel-php, Spring-java, etc.

//? 2.What is Nodejs? What can we do with Nodejs? Why use Nodejs?
//! What; Node. js is a versatile runtime environment that allows developers to build fast and scalable network applications.
//! Why; The answer is simple – it's exceptional for data-intensive real-time applications, APIs, microservices, and
//!streaming applications.
//! What can we do;
//// 1. Real-time web applications
//// 2. Network applications
//// 3. Distributed systems
//// 4. General purpose applications

//? 3. Lets try to write code axplanid above
        //* Define a class named "person".
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  introduceSelf() {
    console.log(`My name is ${this.name} ${this.surname}`);
  }
}
const ibr = new Person("ibr", "kocak");
console.log(ibr);
ibr.introduceSelf();

        //* Define a class named "BankAccount" derived from the Person class.

class BankAccount extends Person{
    //*Let it have a private property named "balance".
    _balance=0
    //* Let's have a constructor that takes "name" and "balance" parameters.

    constructor(name,surname,balance){
        super(name,surname)
        this._balance=balance
    }
    //* Money can be added to the account with a method called "deposit".
    deposit(amount){
        this._balance+=amount 
    }
    //* Money can be withdrawn from the account with a method called "withdraw".
    withdraw(amount){
        if(amount > this._balance){
            console.log("bakiye yetersiz")
        }
        this._balance-=amount
    }
    //* I can find out the total amount with the function called "balance".
    balance(){
        return this._balance
    }
}

const ibr1=new BankAccount("ibr","kocak",100)
console.log(ibr1)
ibr1.deposit(100)
console.log(ibr1.balance())
ibr1.withdraw(50)
console.log(ibr1.balance())
