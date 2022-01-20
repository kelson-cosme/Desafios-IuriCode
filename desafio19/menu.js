const menu = document.getElementById("menu");
const nav = document.getElementById("navegacao");
const navegar = document.getElementById("navegacao")


const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function apertar(){
    if(nav.className == "navegacao"){
        nav.classList.add("active")
        nav.classList.remove("navegacao")
        navegar.style.display = "flex"


        linha1.classList.add("ativar")
        linha2.classList.add("ativar2")
        linha3.classList.add("ativar3")
    } else {
        nav.classList.remove("active");
        nav.classList.add("navegacao");
        navegar.style.display = "none"

        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
    }
    console.log(nav.className)

}

menu.addEventListener("click", apertar)