const logar = document.getElementById("logar")
const usuario = document.getElementById("user1");

function apertei(){
    if(logar.className == ""){
        logar.classList.add("active")

        const cabecalho = document.getElementById("cabecalho");
        cabecalho.style.display = "none"
    }
}

usuario.addEventListener("click", apertei);



const horario = document.getElementById("horario");


const repetir = setInterval(novaHora,50900);
function novaHora() {

    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();

    console.log(m)

    if (m < 10){
        m = "0" + m
    }
    horario.innerHTML = `${"<p>" + h + ":" + m + "</p>"}`
}

novaHora()