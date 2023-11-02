const header=document.querySelector("header")
const addButton=document.getElementById("btn")

header.onmouseover =function(){
    header.style.backgroundColor="red"
    header.style.color="white"
}

header.onmouseout =function(){
    header.style.backgroundColor="transparent"
    header.style.color="black"
}


addButton.addEventListener("click",()=>{
    alert("tıklandı")
})