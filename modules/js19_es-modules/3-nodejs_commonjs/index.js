console.log("COMMON-JS");

const {topla}=require("./app")
const {maxvalue}=require("./app")
console.log(topla(3,5));
console.log(maxvalue);


//? node.js module yapılari için common.js yi kullanmaktadır.
//* commonjs de dışarı paylaşmak için exports veya module.exports kullanılır.
//? paylaşılan bir degisken, fonksiyon, obje vb. kullanmak için ise require() metodu kullanılır.
//? Günümüzde Backend uygulamlarında genelde CommonJS modül yapisi kullanilmaktadır.