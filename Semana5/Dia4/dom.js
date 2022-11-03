//Existe dentro de JS el Documento este atributo me permite obtener elementos de html
//obtener el elemento segun el nombre de su etiqueta
//tag = etiqueta
//h1-div-input-etc

const inputs = document.getElementsByTagName("input")
console.log("input", inputs);

//recordemos que el input es el html colector para recorrerlo debemos convertirlo en un array
//array.from esto convierte un html collection a array

const newInputs = Array.from(inputs);
console.log("New Inputs", newInputs);
//bucle map
newInputs.map((newInput)=>{
    console.log("nueva forma ",newInput)
})
//bucle for
for(let i = 0; i < inputs.length; i++){
    console.log("input", inputs[i].value);
}

const values = document.getElementById("input_password")

values.style.backgroundColor = "#000";
values.style.color = "#FFF";

document.write("Hola gente")