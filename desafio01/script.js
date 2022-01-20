let pesquisa = document.getElementById("pesquisar");
let texto = document.getElementById("texto");

const noticias = [
    {
        data: "01 de jul, 2021",
        like: "♥",
        titulo: "Agora é oficial: o Windows 11 está vindo",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
    },

    {
        data: "02 de jul, 2021",
        like: "♥",
        titulo: "Tim Berners-Lee vai leiloar código-fonte da web",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
    },

    {
        data: "03 de jul, 2021",
        like: "♥",
        titulo: "Tem Firefox novo no pedaço e você vai querer migrar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
    }
];

       
        noticias.forEach(noticia => {
        texto.innerHTML += 
        
        `
                ${
                    "<li>" +
                        "<div>"
                            +"<p>" + noticia.data+ "</p>"+
                            "<p>" + '♥' +"</p>"+
                        "</div>" +
        
                        "<h1>" + noticia.titulo+ "</h1>"+
        
                        "<p>"+ noticia.texto + "</p>"+
                    "</li>"
        
                }
                `
        });


        function handleFilter(){
            texto.innerHTML = ""
            const filtrado = noticias.filter( itens => itens.titulo.toLowerCase().includes(pesquisa.value.toLowerCase()));

            filtrado.forEach(noticias => {
                texto.innerHTML += 
                 `
                ${
                    "<li>" +
                        "<div>"
                            +"<p>" + noticias.data+ "</p>"+
                            "<p>" + '♥' +"</p>"+
                        "</div>" +
        
                        "<h1>" + noticias.titulo+ "</h1>"+
        
                        "<p>"+ noticias.texto + "</p>"+
                    "</li>"
                }
                `
            })
        }
