const lista = document.getElementById("lista");
let resultado = document.getElementById("resultado")
let todos = document.querySelectorAll(".todos");

function procurar(event){
    texto[event.target.value](); //pegar evento do click
    
    console.log(texto)

    let a = event.target.id //evento do click em uma variavel
    let b = document.getElementById(a); //pegar o id do elemento com click
  
    for(let t = 0; t < todos.length; t++){
        if(todos[t].className == "todos bordas-none animate"){
            b.classList.add("bordas")
        } else {
            todos[t].classList.remove("bordas")
        }

    }
}

let direita = document.getElementById("direita")

const texto = {
    '1': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"Técnico de suporte em TI"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Dez 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Agion Tecnologia" +"</p>"+
    
        "<p class='funcao'>" + "Auxiliar nas atividades de suporte n°1, montagem, manutenção de computadores, instalação de programas." + "</p>"
    }
    `,    
    
    '2': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"Estagiário jurídico"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Fev 2021 - Dez 2017' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Fórum da comarca de Rosário Oeste · Estágio" +"</p>"+
    
        "<p class='funcao'>" + "Ajudar no atendimento de telefone e de publico, Alimentar o banco de dados, Auxiliar no atendimento telefônico, Pesquisar e coletar dados solicitados pelo departamento, Fazer digitações de documentos em geral." + "</p>"
    }
    `,

}
texto[1](); //Aparcer o primeiro resultado ao carregar a página
lista.addEventListener("click", procurar);