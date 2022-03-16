const lista = document.getElementById("lista");
let resultado = document.getElementById("resultado")
let todos = document.querySelectorAll(".todos");

function procurar(event){

    texto[event.target.value](); //pegar evento do click

    let a = event.target.id //evento do click em uma variavel
    let b = document.getElementById(a); //pegar o id do elemento com click
  

    for(let t = 0; t < todos.length; t++){
        if(todos[t].className == "todos bordas-none"){
            b.classList.add("bordas")
        } else {
            todos[t].classList.remove("bordas")
        }

    }
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