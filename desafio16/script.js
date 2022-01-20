const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function aparecer(){
    if(nav.className == "navegacao"){
        nav.classList.add("active")

        linha1.classList.add("ativar")
        linha2.classList.add("ativar2")
        linha3.classList.add("ativar3")

    } else {
        nav.classList.remove("active")

        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
    }
  
}

menu.addEventListener("click", aparecer)


document.addEventListener("keydown", function(event){   
    if (event.keyCode == 27){
        nav.classList.remove("active")


        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
    }
});

let i;

for(i = 0; i < 10; i++){
    console.log(i)
}


