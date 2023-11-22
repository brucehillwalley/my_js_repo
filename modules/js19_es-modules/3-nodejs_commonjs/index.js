console.log("COMMON-JS");

const {topla,maxvalue}=require("./app")
const {pi}=require("./app")

console.log(topla(3,5));
console.log(maxvalue);
console.log(pi);

const {code_cloud}=require("./app")
console.log(code_cloud);
// prompt("merhaba")
//! node prompt komutunu bilmez DOM da çünkü

//? node.js module yapılari için common.js yi kullanmaktadır.
//* commonjs de dışarı paylaşmak için exports veya module.exports kullanılır.
//? paylaşılan bir degisken, fonksiyon, obje vb. kullanmak için ise require() metodu kullanılır.
//? Günümüzde Backend uygulamlarında genelde CommonJS modül yapisi kullanilmaktadır.