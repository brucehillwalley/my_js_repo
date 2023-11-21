//*************************************/
//* ES-MODULES (HESAPMAKİNESİ.JS)
//*************************************/

export const isim = "--Hesap Makinesi--";

export const PI = 3.1415;

export const asalSayilar = [2, 3, 4, 5, 7, 11, 13, 17, 23];
//?named export

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const carp = (a, b) => a * b;
const bol = (a, b) => a / b;

export { topla, cikar, carp, bol };

const mesaj = () => {
  console.log("Module Bitti");
};

export default mesaj; //?default export yöntemi
//? modül başına sadece bir tane export default yapılabilir

// const deneme="deneme"
// export default deneme
// hesapmakinesi.js:28 Uncaught SyntaxError: Identifier '.default' has already been declared (at hesapmakinesi.js:28:8)
