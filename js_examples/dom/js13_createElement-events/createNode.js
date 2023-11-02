console.log("**** CREATE NODE ****");

//* ------- YENI BIR ELEMENT OLUSTURMA (CreateElement metodu) ------

//? 1- yeni bir element olustur
const myPar = document.createElement("p");

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("P elementi");

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
myPar.appendChild(text);

//?4- Yeni olusan elementi DOM tree'ye ekle.
const addItemSection = document.querySelector(".add-item");
addItemSection.appendChild(myPar);

//! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar.
addItemSection.before(myPar); //? add-item section'ın hemen üzerine myPar'i baglar.

//? React icerigine sahip olan li elementinin devamına yeni elemnti ekle
const reactLi = document.querySelector("ul li:nth-child(4)");
reactLi.after(myPar);

//* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------
//? 1) Yontem
myPar.id = "paragraf";
myPar.className = "red center";
myPar.name = "par";
myPar.type = "button";

//? 2) Yontem (setAttribute)
myPar.setAttribute("id", "deneme");
myPar.setAttribute("type", "button");
myPar.setAttribute("class", "bg-warning border border-danger border-3");

//? 3) Yontem (classList)
myPar.classList.add("text-center");

console.log(myPar.classList.contains("bg-warning"));
if (myPar.classList.contains("border-danger")) {
  myPar.classList.remove("border-danger");
  myPar.classList.add("border-primary");
}
//? toggle metodu belirtilen class eğer yok ise bu classı ekler var ise kaldırır
myPar.classList.toggle("text-danger");
//?kullanım örneği dark tema ekle kaldır butonu

//* ------- YENI BIR ELEMENT OLUSTURMA (InnerHtml) ------

const ul = document.querySelector("ul");

ul.innerHTML += `
<li>C++<li>
<li>Java<li>
<li>Ruby<li>
<li>Assembly<li>
`;

const section3=document.createElement("section")
document.querySelector("main").appendChild(section3)

section3.innerHTML=``