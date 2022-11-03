const btnLogin = document.querySelector("#btn-login")

btnLogin.onclick = function(event){
    event.preventDefault ();

    const inputs = document.querySelectorAll("input")
    //insertar un valor al local storage 

    inputs.forEach((inputs)=>{
        console.log(inputs);
        localStorage.setItem(inputs.name, inputs.value);
        
    })

}

// esta es la forma de capturar lo de local storage

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = local.localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display = "none";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}