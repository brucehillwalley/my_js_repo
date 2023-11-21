console.log("CALCULATE.JS");

const calculatePrice = (products) => {
  return products.reduce((acc, product) => 
    acc + product.price, 0)
  
}

//? const users=["ali","veli"]
//? Uncaught SyntaxError: Identifier 'users' has already been declared (at app.js:1:1)
//! aynı isimleri kullanamayız app.js de tanımlı
