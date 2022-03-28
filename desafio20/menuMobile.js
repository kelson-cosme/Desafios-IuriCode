const menu = document.getElementById("menu-mobile");
let nav = document.querySelector(".navegacao");
const preecher = document.querySelector(".preencher");

const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function navBar(){ //função para aparecer o menu mobile
    if (window.matchMedia("(max-width:767px)").matches){ //funcionar só quando a tela for menor que 767px
        if(nav.className != ""){ 
            nav.classList.toggle("active")

            linha1.classList.toggle("ativar");
            linha2.classList.toggle("ativar2");
            linha3.classList.toggle("ativar3");


            if(nav.className == "navegacao active"){ 
                document.body.style.overflow = "hidden" //desativar o scroll
                preecher.style.display = "block" //apertar fora fecha o menu
            } else {
                document.body.style.overflow = "auto"
                preecher.style.display = "none"
            }
        }
    }
        
}



preecher.addEventListener("click", navBar);
menu.addEventListener("click", navBar)
