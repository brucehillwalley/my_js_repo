//* Named export ile paylasima acildi

//* Public klasöründe olmayan resimlere erisebilmek icin import yapmak gerekir. */}
import bird from "./img/birds.jpg"
import bird1 from "./img/spring.jpg"

//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

export const Main = () => {
   //? Local style objesi (Harici bir dosyadan da import edilebilir)
  const parStyle = {
    fontFamily: "tahoma",
    color: "#333",
    fontSize: "1.2rem",
  };
  const imgStyle = {
    width: "300px",
    borderRadius: "10px",
    marginRight: "20px",
  }

  return (
    <main>
      {/* //? inline-styling (key-value)
    //?notasyon olarak camelCase kullanılmalı */}
      <h1 style={{ color: "white", backgroundColor: "maroon" }}>
        {" "}
        MAIN SECTION
      </h1>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut
        distinctio quibusdam vel minima ab similique rem odio atque eligendi?
      </p>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut
        distinctio quibusdam vel minima ab similique rem odio atque eligendi?
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_640.jpg"
        alt="owl"
        style={imgStyle}
      />
      <img src={bird} alt="hemming" style={imgStyle} />
      <img src={bird1} alt="hemming" style={imgStyle} />
      

         {/* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. /Ana dizin) */}
      <img src="./images/puffin.jpg" alt="puffin" style={imgStyle} />
    </main>
  );
};
