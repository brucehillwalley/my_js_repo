import { useState } from "react";

const UseStateObject = () => {
    // const [ad, setAd]=useState("Ahmet")
    // const [meslek, setMeslek]=useState("Developer")
    // const [yas, setYas]=useState(22)

    const [kisi, setKisi]=useState({

        ad:"Canan",
        meslek:"Designer",
        yas:30,
    })
    const [toogle, setToogle]=useState(false)

    // let toggle = false;
    const handleSwap=()=>{
        // toggle=!toggle
        setToogle(!toogle);
        if (toogle){
            setKisi({...kisi,"ad":"Ali","meslek":"Manager",yas:23})
        }else{
            setKisi({...kisi,"ad":"Cemal","meslek":"Analyst", yas:37})
        }

    }

  return (
    <div>
      <h1>Personel</h1>
      <h2>Adi: {kisi.ad}</h2>
      <h3>Meslegi:{kisi.meslek}</h3>
      <h3>Yasi:{kisi.yas}</h3>

      <button onClick={()=>setKisi({...kisi, ad:"Mehmet"})}>isim degistir</button>
      <button onClick={()=>setKisi({...kisi, meslek:"tester"})}>meslek degistir</button>
      <button onClick={()=>setKisi({
        ...kisi, yas:kisi.yas+1
      })}>yas degistir</button>


<button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default UseStateObject;
