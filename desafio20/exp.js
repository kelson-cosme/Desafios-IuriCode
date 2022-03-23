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

let direita = document.getElementById("direita")

const texto = {
    '1': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste1"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "Ldsadsadsdasdasdadasdas, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,    
    
    '2': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste2"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "aaaaaaaaaaaaaaaaaaaaaaaaat, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,

    
    '3': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste3"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "bbbbbbbbbbbbbbbbbbbbbbbbbt, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,


    '4': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste4"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "Loreccccccccccccccccccconsectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,


    '5': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste5"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "ddddddddddddddddddddddddconsectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,


    '6': () => direita.innerHTML = `
    ${
        "<div class = 'titulo'>"+ 
            "<h1 class = 'titulo2'>"
                +"teste6"+
            "</h1>" +
    
            "<p class = 'data'>"+ 'Nov 2021 - Atual' + "</p>"
        +"</div>"+
    
        "<p class = 'local'>"+ "Digital House" +"</p>"+
    
        "<p class='funcao'>" + "hhhhhhhhhhhhhhhhhhhhhhhhhctetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna." + "</p>"
    }
    `,

}
// texto[1](); //Aparcer o primeiro resultado ao carregar a página
lista.addEventListener("click", procurar);