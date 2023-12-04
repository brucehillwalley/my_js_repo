

const Event = () => {
  const handleTikla =(e)=>{
alert("tiklandi");
// confirm("onayla"); //? çalışmıyor
console.log("tiklandi");
console.log(e);
console.log(e.target);
console.log(e.target.name);
console.log(e.target.id);

  }

const handleSil=function(str){
  console.log(str, "silindi");
}

function handleDegistir() {
  message="FS15 React Öğreniyor"
  console.log(message);
}
//? statik bir değişken
let message="FS15"



//? bir componentin return kısmı 3 farklı yöntenle render edililr
//? 1- içindeki herhandi bir state değişirse
//? 2- Props değişirse
//? 3- Refresh force edilirse (tercih edilen bir durum değil zaten refreshleri azaltmak amaç)
  return (
   
    <div> <h1>Events</h1>
    <h2>{message}</h2>
    <button onClick={handleTikla} id="btn" name="my-button">Tikla</button>

    {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
    <button onClick={()=> handleSil(message)}>Sil</button>
    <button onClick={handleDegistir}>Degistir</button>
    </div>
  )
}

export default Event


//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).


//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.