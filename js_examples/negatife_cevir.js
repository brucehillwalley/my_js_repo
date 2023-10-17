let girilenSayı = prompt("");

//? en profesyonel çözüm
console.log(`Girilen sayının negatifi ${-Math.abs(girilenSayı)}`);

//! alternatifler aşağıda

// if (girilenSayı > 0) {
//   console.log("Girilen sayının negatifi ", girilenSayı * -1);
// } else {
//   console.log("Girilen sayının negatifi ", girilenSayı);
// }

//!-------------
// girilenSayı > 0
//   ? console.log("Girilen sayının negatifi ", girilenSayı * -1)
//   : console.log("Girilen sayının negatifi ", girilenSayı);

//!-------------
// console.log(
//   "Girilen sayının negatifi ",
//   (girilenSayı > 0 ? girilenSayı * -1 : girilenSayı)
// );

//!-------------
/*
if (girilenSayı > 0) {
  console.log("Girilen sayının negatifi ", girilenSayı * -1);
} else if (girilenSayı == 0) {
  console.log("Girilen sayının negatifi ", girilenSayı);
} else {
  console.log("Girilen sayının negatifi ", girilenSayı);
}

//!-------------

girilenSayı >= 0
  ? (girilenSayı > 0
    ? console.log("Girilen pozitifin negatifi ", girilenSayı * -1)
    : console.log("Girilen sıfırın negatifi ", girilenSayı))
  : console.log("Girilen negatifin negatifi ", girilenSayı);
*/
