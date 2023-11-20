//*************************************/
//* ES-MODULES (APP.JS)
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonkisyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.
import {isim, PI as pi} from "./hesapmakinesi.js"
// import {PI} from "./hesapmakinesi.js"


console.log(" *** ES-Modules ** ")
console.log(pi*10*10);



import {topla,carp,cikar,bol} from "./hesapmakinesi.js" //?importlar hoisted dır.

console.log("toplam:",topla(3,4));
console.log("çarpım:",carp(3,4));

console.log(isim);

//! 1- import'lar hoisted olur bu yüzden herhangi bir yerde eklenebilir ancak best practice en üste eklenmeleridir.
