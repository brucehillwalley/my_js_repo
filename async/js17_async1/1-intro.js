//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//*BH prosesler threadlerden oluşur eş zamanlı olarak birden fazla işi yürütüyoruz işlemcinin thread sayısı işletim sistemi önemli

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// console.log("*** Senkron *** ");
// // alert("Alert") //?Blocking
// // console.log("FS15");

// const gecikme = (sure) => {
//   const start = new Date().getTime();

//   while (new Date().getTime() < start + sure) {}
// };
// console.time("basla")//? timer ı başlat
// gecikme(2000);
// console.log("bitti");
// console.timeEnd("basla");//? timer ı bitir ve geçen süreyi göster


//* Asenkron (setTİmeout())
// console.log("Timeout kuruldu");//?senkron

// //?Asenkron kod (macrotask kuyruğu)
// const timeoutId=setTimeout(() => {
//     console.log("süre doldu");
// }, 1000);
// const timeout2=setTimeout(() => {
//     console.log("2süre doldu");
// }, 500);//? en az 500ms sonrasında tetikleme olur kuyruktaki yoğunluğa göre
// //? senkronlar çalıştıktan sonra
// console.log("Timeout bitti");

// clearTimeout(timeoutId);//? Timeout'u durdurmak icin kullanılan metot

// //*Asenkron (setInterval, clearInterval)- periyodik bir aralık belirler

// let i=0

// const intervalId=setInterval(()=>{

// console.log(++i);
// if (i>=5) {
//     clearInterval(intervalId)
// }

// },1000)


//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

// setTimeout(() => {
//     console.log("john:Hi")
//     setTimeout(() => {
//       console.log("Sarah: Hello")
//       setTimeout(() => {
//         console.log("John: How Are you?")
//         setTimeout(() => {
//           console.log("Sarah:Fine and you?")
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
