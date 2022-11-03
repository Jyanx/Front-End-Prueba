//1.    Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
let numero1 = prompt ("Escribe el numero 1: ");
let numero2 = prompt ("Escribe el numero 2: ");
let suma = 0;
suma = +numero1 + +numero2 ;
prompt("El resultado es: ",suma)

//2.    Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
let Num1 = prompt ("Escribe la nota 1: ");
let Num2 = prompt ("Escribe la nota 2: ");
let Num3 = prompt ("Escribe la nota 3: ");
let Num4 = prompt ("Escribe la nota 4: ");
let calculo = 0
calculo = (+Num1 + +Num2 + +Num3 + +Num4) / 4;
prompt("El Promedio es: ",calculo);
//3.    Calcular el área de un rectángulo
const largo = prompt("Escribe el largo");
const ancho = prompt("Escribe el ancho");
const area = (a,b)=>{
    return a*b;
}
prompt("Area: ",area(largo,ancho));
//4.    Calcular el área de un triángulo
const base = prompt("Escribe la base");
const altura = prompt("Escribe la altura");
const AreaT = (c,d)=>{
    return c*d/2
}
prompt("Area del triangulo es: ",AreaT(base,altura))
//5.    Calcular el área de una circunferencia
const radioC = prompt ("Escribe el radio");
const AreaC = (a)=>{
    return (Math.PI*(a*a));
}
prompt("El area del circulo es: ",AreaC(radioC));
//6.    Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre


//7.    Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).


//8.    Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.