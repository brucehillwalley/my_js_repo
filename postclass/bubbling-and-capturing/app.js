document.getElementById("form").addEventListener("click", (e) => {
  console.log("form");
  e.stopPropagation();
});
document.getElementById("div").addEventListener("click", (e) => {
  console.log("div");
  e.stopPropagation();
});
document.getElementById("p").addEventListener("click", (e) => {
  console.log("p");
  e.stopPropagation();
});

document.querySelector("#form").addEventListener("click", (e) => {
  if (e.target.id == "div") {
    e.target.style.backgroundColor = "yellow";
  }
});

// for(let elem of document.querySelectorAll('*')) {
//     elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
//     elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
//   }
