const menuMobile = document.getElementById("menuMobile");
const lista = document.getElementById("menu");
const tela = document.getElementById("tela");

const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function aparecer(){
    lista.classList.toggle("active")
    tela.classList.toggle("cheio")


    if(menuMobile.className == ""){
        linha1.classList.toggle("ativar")
        linha2.classList.toggle("ativar2")
        linha3.classList.toggle("ativar3")
    }

    if(tela.className == "cheio"){
        tela.addEventListener("click", aparecer)
    }
}

menuMobile.addEventListener("click", aparecer)