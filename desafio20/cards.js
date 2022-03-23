const projetos = document.querySelectorAll(".botao");
const cartao = document.querySelectorAll("#cards");

function cards(){
    let id = event.target.value


    if(id != undefined){
        if(cartao[id].className == "card"){
            cartao[id].classList.add("cardFechar")
        }
    } else {
            let i;

            for(i = 0; i < cartao.length; i++){
                if(cartao[i].className == "card cardFechar"){
                    cartao[i].classList.remove("cardFechar")
                }
            }
    }
}
