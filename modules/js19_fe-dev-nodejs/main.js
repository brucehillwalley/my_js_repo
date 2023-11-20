import "./style.scss"
import { getUsers } from "./src/getUsers"

const app = document.querySelector("#app")

app.innerHTML = `<section id="users"></section>`






window.addEventListener("load",()=> getUsers())