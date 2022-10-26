// Una funcion es un conjunto de soluciones o ejecuciones para realizar tareas

function nombreDeLaFuncion(){
// Una vez declarada mi funcion todo el codigo que hagamos este, solo se ejecutara cuando la llame



}



function sumar (numero1, numero2){
    const convertNumero1 = +numero1;
    const convertNumero2 = +numero2;

    const suma = convertNumero1 + convertNumero2;
    console.log("Es el resultado: ", suma);
}


// tipos de datos

let nombre = "Eduardo" //string
let age = 34 // number
let talla = 1.75 // float
let boll = true // boolean
let indefinido; // no definido
let nulo = null;
let simbolo = symbol("zcd");
let object = {};

console.log(nombre, typeof(nombre))
console.log(age,typeof(age))
console.log(boll,typeof(boll))

// cambiar el tipo de dato

console.log(age,typeof toString(age))
console.log(nombre,typeof parseInt(nombre))
console.log(talla,typeof parseFloat(talla))

//tipos de funciones 
//funcion expresiva 
function suma3 (a,b){
    return a+b
}

//funcion anonima 

let restar = function (x,y){
    return x-y
}

// funcion flecha

let multiplicar =(x,y)=>{
    return x*y
}


console.log("La suma es: ",suma3);
console.log("La resta es: ",suma3);
console.log("La multiplicacion es: ",suma3);