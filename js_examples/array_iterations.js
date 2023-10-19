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