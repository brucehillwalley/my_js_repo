//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
  const API_KEY = "c5f41f8f198d48d6b05fc398c6a3ac49";
  const BASE_URL = "https://newsapi.org/v2/";
  const queryString = "top-headlines?country=us&category=sports&";

  // const res= await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=c5f41f8f198d48d6b05fc398c6a3ac49`)

  try {
    const res = await fetch(`${BASE_URL}${queryString}apiKey=${API_KEY}`);
    //? Error handling
    if (!res.ok) {
      throw new Error(`Something went wrong:${res.status}`);
    }
    const data = await res.json();

    renderNews(data.articles);
  } catch (error) {
    const newsDiv = document.getElementById("news-div");
    newsDiv.innerHTML = `
  <h2>${error}</h2>
  <img src="./img/404.png" />`;
  }
};

const renderNews = (news) => {
  const newsDiv = document.getElementById("news-div");
  news.forEach((element) => {
    const { title, urlToImage, url, content } = element;
    newsDiv.innerHTML += `
<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="card" >
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${content}</p>
    <a href="${url}" target="_blank" class="btn btn-primary">Detail</a>
  </div>
  </div>
</div>`;
  });
};

window.addEventListener("load", () => {
  getNews();
});
