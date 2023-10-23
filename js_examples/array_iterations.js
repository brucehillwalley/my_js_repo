//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500];

for (let price of prices) {
  console.log(price);
}

//? for-Each

prices.forEach((p) => console.log(p * 1.1));

prices.forEach((price, index) => console.log("DEĞER:", price, "SIRA", index));

//? prices toplamı
let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

//* üç parametreli forEach arr prices ın kopyası p eleman i indexi
//!hoca böyle kullanmak pek tercih edilmiyor diyor.
//? forEach void function dır. Yani bir şey döndürmez.
prices.forEach((p, i, arr) => {
  if (p < 270) {
    console.log(p);
    arr[i] = p * 1.1;
  }
});

//? forEach undefined döndürüyor return yok

const triples = prices.forEach((p) => p ** 3);
console.log(triples);
console.log(prices);

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperNames = names.map((n) => n.toLocaleUpperCase());
console.log(upperNames);

//? forEach ile zorlama çözüm return etmeği için ayrı dizi tanımla vs.
let upperNamesForEach = [];
names.forEach((n) => upperNamesForEach.push(n.toLocaleUpperCase()));
console.log(upperNamesForEach);



//?örnek
const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number((tl / 27.97).toFixed(2)));
const euroPrices = tlPrices.map((tl) =>Number((tl / 29.8).toFixed(2)));

console.log(dolarPrices);
console.log(euroPrices);


//?-----------FILTER---------

const maaslar=[5500, 8000, 6500, 9000, 10000, 15000,25000]

const buyukOnbin=maaslar.filter((maas)=>maas>10000)
console.log(buyukOnbin,maaslar);


//* chainig pipeline

const dokuzbindenAz=maaslar.filter((m)=>m<9000).map((m)=>m*1.5)

console.log(dokuzbindenAz);

//?------------------REDUCE---------

const salaries = [10000,15000,9000,20000]

let sumofSalary=salaries.reduce((acc,val)=>acc+val,0) //? 0 başlangıç değeridir olmasa da çalışır

console.log("Total:", sumofSalary);

let sumofSalary1=salaries.reduce((acc,val,i)=>{
  result=`${i} ${acc+val}`
  console.log(result);
  return acc+val})
console.log("Total:", sumofSalary1);

const numbers=[2,4,6,7]
const multi= numbers.reduce((acc,val)=>acc*val,1)
console.log(multi);


//? filter, map,reduce

const zamliMaasToplami=salaries.filter((s)=>s>=9000 && s<15000).
map((s)=>s*1.2).
reduce((sum,zamli)=>sum+zamli)

console.log(zamliMaasToplami);


//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15]
const check = ages.every((age) => age >= 18)
check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1