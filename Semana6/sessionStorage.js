const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")

crear.onclick = function(){
    sessionStorage.setItem(
        "variable_1",
        "mi primer variable en storage"
    )
}

obtener.onclick=function(){
    const variable = sessionStorage.getItem("variable_1");
    console.log(variable)
}

eliminar.onclick=function(){
   sessionStorage.clear()
}