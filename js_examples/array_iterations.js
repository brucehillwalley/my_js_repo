//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500]

for(let price of prices){
    console.log(price);
}

//? for-Each

prices.forEach((p)=>console.log(p*1.1));

prices.forEach((price,index)=>console.log("DEĞER:",price,"SIRA",index))

//? prices toplamı 
let sum=0
prices.forEach((price)=>sum+=price)
console.log("SUM:",sum);


//* üç parametreli forEach arr prices ın kopyası p eleman i indexi
//!hoca böyle kullanmak pek tercih edilmiyor diyor.
//? forEach void function dır. Yani bir şey döndürmez.
prices.forEach((p,i,arr)=>{
    if(p<270){
        console.log(p);
        arr[i]=p*1.1
    }

})