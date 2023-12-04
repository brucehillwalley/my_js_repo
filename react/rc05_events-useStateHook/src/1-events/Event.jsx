

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

const message="FS15"

  return (
   
    <div> <h1>Events</h1>
    <button onClick={handleTikla} id="btn" name="my-button">Tikla</button>

    {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
    <button onClick={()=> handleSil(message)}>Sil</button>
    </div>
  )
}

export default Event