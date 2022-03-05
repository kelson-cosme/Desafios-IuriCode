const menuMobile = document.getElementById("menuMobile");
const lista = document.getElementById("menu");
const tela = document.getElementById("tela");

function aparecer(){
    lista.classList.toggle("active")
    tela.classList.toggle("cheio")

    if(tela.className == "cheio"){
        tela.addEventListener("click", aparecer)
    }
}

menuMobile.addEventListener("click", aparecer)