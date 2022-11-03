//crear una lista con js
//createElement("li")
const input = Array.from(document.querySelectorAll("input"));
// atrapar el input
const contenedor = document.querySelector("#container-list");
//crear el ul
const ul = document.createElement("ul");
//llenar la lista recorriendo el input con un nodelist
input.map((element)=>{
    //a la par que recorre tengo que crear el elemento de mi lista
    const li = document.createElement("li");
    //debo crear el valor de mis li, es input value
    //createTextNode crea los valores para mis elementos html
    const elementText = document.createTextNode(element.value);
    // ahora debo insertar el valor de mis li
    li.appendChild(elementText);
    //debo agregarlo a mi lista
    ul.appendChild(li);
})

contenedor.appendChild(ul);

console.log("este es el ul", ul);

const body = document.body;
body.style.backgroundColor="red"
body.style.textAlign =
body.style.alignItems =
body.style.fontFamily = "Arial Black"