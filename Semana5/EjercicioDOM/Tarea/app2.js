let button = document.querySelector(".switch");

let title = document.querySelector("h1");
let  container = document.querySelector(".container");
let text = document.querySelector("p")
let texto = document.querySelector(".texto")
let  mode = "light";


function lightMode(){
    button.className = "switch";
    container.className = "container";
    title.textContent = "Modo Luz";
    text.textContent = "Modo Luz Activado"
    texto.textContent = "Light"
}

function darkMode(){
    button.className = "darkButton";
    container.className = "darkContainer";
    title.textContent = "Modo Oscuro";
    text.textContent = "Modo Oscuro Activado"
    texto.textContent = "Dark"
}

button.addEventListener("click",()=>{
    if(mode == "light"){
    darkMode();
    mode = "dark";
}
    else{
        lightMode();
        mode = "light";
    }
});
