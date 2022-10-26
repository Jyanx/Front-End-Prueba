//variables
//let
//const
//var

let numero1 = 10;
let numero2 = 20;


suma= numero1 + numero2;

console.log("Este es el resultado", suma)
console.error("Este es el resultado", suma)
console.warn("Este es el resultado", suma)

//Alert = es una alerta en el navegador
//console.log = es una funcion del navegador imprime en consola
//Concatenar = juntar cadena de texto con numero


// Calculadora con JS
//promp es una ventana emergente que nos pide un valor
//y ese valor se guarda en una variable

//const valor1 = prompt ("Ingresa el valor1");
//const valor2 = prompt ("Ingresa el valor2");

const valor1 = prompt("Ingresa el Valor 1")
console.log("Valor 1", valor1);

const valor2 = prompt("Ingresa el Valor 2")
console.log("Valor 2", valor2);

const operacion = prompt("ingresa una operación +, -, *, /")
if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("Resultado: ", resultadoCalculadora);
}else if(operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2;
    console.log("Resultado: ", resultadoCalculadora);
}
else if(operacion ==="*"){
    resultadoCalculadora = +valor1 * +valor2;
    console.log("Resultado: ", resultadoCalculadora);
}