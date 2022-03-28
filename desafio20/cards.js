const projetos = document.querySelectorAll(".botao");
const cartao = document.querySelectorAll("#cards");

function cards(){
    let id = event.target.value //valor do div que o evento click irá pegar


    if(id != undefined){ //
        if(cartao[id].className == "card"){
            cartao[id].classList.add("cardFechar") //adicionar classe
        }
    } else {
            let i;

            for(i = 0; i < cartao.length; i++){ //verificar as divs que tem certas classes
                if(cartao[i].className == "card cardFechar"){
                    cartao[i].classList.remove("cardFechar")
                }
            }
    }
}
