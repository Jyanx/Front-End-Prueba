// /* //bucles con objetos

// /*const laptops=[
//     {
//         marca : "mac",
//         precio : 2500,
//         nombre : "android"
//     }
//     ,{
//         marca : "Lenovo",
//         precio : 1800,
//         nombre : "Eduardo"
//     },{
//         marca : "Acer",
//         precio : 2200,
//         nombre : "Jose"
//     }
// ]
// //console.log("arrays de objetos ",laptops)
// for (o = 0 ; o < laptops.length; o++){
//     console.log(laptops[o].nombre)
// }
// //----------------------------------------------
// //map
// //
// const productos =[
//     {
//         name : "Tv",
//         price: 1200
//     },{
//         name: "telefono",
//         price: 1300
//     },{
//         name: "PC",
//         price: 2300
//     }
// ]
// productos.map((productos,index)=>{
//     console.log("indice", index);
//     console.log("producto",productos.price)
// })
// console.log(productos[index].name)
// */
// //----------------------------------------------
// //Bucle While
// //esto sirve para hacer un bucle un numero determinado de veces
// let contador = 0
// while(contador<=5){
//     console.log("contador ",contador);

// //no se olvide alterar el contador cada vuelta
//     contador++;
// }

// // escribir un programa que pida al usuario una palabra y lo muestre 10 veces

// const imprimirDiezVeces = (palabra)=>{
//     let contador = 0 ;
//     while (contador <=10){
//         console.log(palabra);
//         contador++
//     }
// }
// imprimirDiezVeces("Hola")   

//----------------------------------------------------------
const numeros2=[1,2,3,4,5,6,7,8,9,10]

numeros2.forEach((numeros2,index)=>{
    console.log("inicio",index)
    console.log("que hace", numeros2)
    return numeros2*2
})

const productos2=[
    {
        name: "Eduardo",
        price: 2000000
    },{
        name: "Jose",
        price: 203223
    },{
        name: "Alonso",
        price: 232242
    }
];
productos2.forEach((productos2)=>   {
    console.log(productos2)
})
productos2.forEach((productos2)=>console.log(productos2.price))
