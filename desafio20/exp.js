const lista = document.getElementById("lista");
let resultado = document.getElementById("resultado")

function procurar(event){


    texto[event.target.value]();

    let a = event.target.id
    let b = document.getElementById(a);
    
    if(b.className == ""){
        b.classList.add("bordas")
    } 



    // else{
    //     b.classList.remove("bordas")
    // }
}


const texto = {
    '1': () => resultado.innerHTML = "teste1", 
    '2': () => resultado.innerHTML = "teste2",
    '3': () => resultado.innerHTML = "teste3",
    '4': () => resultado.innerHTML = "teste4",
    '5': () => resultado.innerHTML = "teste5",
    '6': () => resultado.innerHTML = "teste6",

}

lista.addEventListener("click", procurar)