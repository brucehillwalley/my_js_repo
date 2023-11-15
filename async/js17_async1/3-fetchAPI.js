//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")
let veri="merhaba"

fetch("https://api.github.com/users")
.then((res)=>{
    // console.log(res)
    if(!res.ok){  //? fetck api de hatayı bizim yakalamamız gerakiyor
        throw new Error(`HTTP error! status: ${res.status}`); //? bir hata fırlatıyoruz
    }
    return res.json()})
.then((data)=>{
    // veri=data
    // console.log(veri);
   show(data)

})
.catch((err)=>document.write(err)) 

console.log(veri);
const show=(user)=>{
   const userSection=document.getElementById("users")

   user.forEach(element => {
    
   });
}


