"use strict"

/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- */

// Direkt obje isinlendirme PascalCase veya camelCase kullanabiliriz:
// const exampleObject = {

//     propertyName: 'value', // attribute, field

//     methodName: function() {
//         return 'methodName() is a method'
//     },

//     methodAlternative() {
//         return 'this is a method'
//     }
// }

// console.log( exampleObject.propertyName )
// console.log( exampleObject.methodName() )

/* ------------------------------------------------------- *

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(param1) {
        console.log(param1)
        return 'Engine runned'
    }
}

console.log( Car.brand )
console.log( Car.colors )
console.log( Car.colors[0] )
console.log( Car.details )
console.log( Car.details.color1 )
console.log( Car.startEngine('value') )

// Alternative Style:
console.log( Car['brand'] )
console.log( Car['colors'][0] )
console.log( Car['details']['engineSize'] )
console.log( Car['startEngine'](0) )

/* ------------------------------------------------------- *
//? 'THIS' KEYWORD

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(param1) {
        console.log(param1)
        return 'Engine runned'
    },
    getDetails: function() {
        // return this
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.startEngine('selam')
    },
    arrowMethod: () => {
        //* Arrow function is globalScope. (Not working this keyword in here)
        return this
        // return Car.brand
    }
}

// console.log( Car.getDetails() )
console.log( Car.arrowMethod() )

/* ------------------------------------------------------- *
//? ARRAY DESTRUCTURING

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

// const var0 = testArray[0]
// const var1 = testArray[1]
// const var2 = testArray[2]
// const var9 = testArray.slice(3, 5)
// console.log(var0, var1, var2, var9)

//? Sıralama Önemli!
const [var0, var1, var2, ...var9] = testArray
console.log(var0, var1, var2, var9)

//? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
const [firstItem, secondItem, ...others] = testArray
console.log(firstItem, secondItem, others)

//? Spread Operator (Dağıtıcı) (Eşittirin sağ tarafında)
const newArray = ['value5', ...testArray, 'value6']
// const newArray = ['value0', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6']
console.log(newArray)

/* ------------------------------------------------------- *
//? OBJECT DESTRUCTURING

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function() {
        return 'Engine Runned.'
    }
}

//? Rest Operator (Key isimleri önemli!)
// const { year, model, brand, ...others } = Car
// console.log(year, model, brand, others)

// İsim değiştirme:
const { year, model: newName, brand, ...others } = Car
console.log(year, newName, brand, others)

//? Sread Operator:
const newObj = {
    ...Car,
    newKey: 'new-value'
}
console.log(newObj)

//? Object to JSON:
const json = JSON.stringify(Car)
console.log(typeof json, json)

//? JSON to Object:
const obj = JSON.parse(json)
console.log(typeof obj, obj, obj.brand)

//? Object to Array
// Keys:
const arrKey = Object.keys(Car)
console.log(arrKey)
// Values:
const arrValue = Object.values(Car)
console.log(arrValue)
// Entires (key, value):
const arrAll = Object.entries(Car)
console.log(arrAll)

/* ------------------------------------------------------- *
//? CONSTRUCTORS

const constructorFunction = function() {

    this.property = 'value'
}

/* ------------------------------------------------------- */
//? "NEW" KEYWORD

const carConstructor = function (brand, model, year, methodParam) {

    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function(methodParam) {
        return ('Engine runned.')
    }
}

const newCar = new carConstructor('Ford', 'Mustang', 1967)
console.log(typeof newCar, newCar)
console.log( newCar.brand )
console.log( newCar.startEngine() )

const newCar2 = new carConstructor('Mercedes', 'CLK200', 2015)
console.log(typeof newCar2, newCar2)
console.log( newCar2.brand )
console.log( newCar2.startEngine() )


/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */