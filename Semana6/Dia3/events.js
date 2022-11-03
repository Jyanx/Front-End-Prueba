const btnPrueba = document.querySelector("#btn-prueba");
//Atrape el boton
btnPrueba.onclick = function(event){
    console.log("click desde el boton");
    console.log(event);
    Swal.fire("Hola mundo");
};
// Escribi la funcion 
//-----------------------------------------------------------------
const btnPregunta = document.querySelector("#btn-pregunta");


btnPregunta.onclick = function(event){
    Swal.fire("Alguna pregunta?","Aqui te responderemos.");
};
//------------------------------------------------------------------

const btnError = document.querySelector("#btn-error");

btnError.onclick = function(event){
    ShowAlert("error","hubo un error","Usuario o contraseña erronea");
};

//Definiendo la funcion nueva - ShowAlert
function ShowAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href='https://google.com'> Link de Footer "
    })
}

//---------------------------------------------------------------
const btnWarning = document.querySelector("#btn-warning")
function SWarning(icon,title,text){
    Swal.fire({
        icon,
        title,
        text
    })
}
btnWarning.onclick = function(event){
    SWarning("warning","Alerta","Parece que hubo un problema")
}
//----------------------------------------------------------------
const btnAlertBotones = document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick = function(){
    Swal.fire({
        title: "Alerta",
        text: "Texto Alerta",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "Negar"
    }).then((resultado)=>{
        console.log("Resultado: ",resultado);
        if(resultado.isConfirmed){
            ShowAlert("succes","confirmado","Se completo la operacion");
            console.log("Se confirmo");
        }
        if(resultado.isDenied){
            ShowAlert("error","Denegado","Se rechazo la operación");
            console.log("Se denego")
        }
    })
}
//---------------------------------------------------------------------
const btnAlertImagen = document.querySelector("#btn-alert-img")
const urlPochita = "https://somoskudasai.com/wp-content/uploads/2022/10/portada_chainsaw-man-79.jpg"

btnAlertImagen.onclick = function(){
   Swal.fire({
    title: "Chainsaw Man",
    text: "Pochita imagen",
    imagegUrl: urlPochita,
    imageWidth: 200,    
    imageHeight: 200,
   }) 
}

//------------------------------------------------------------------------
const btnAlertaCustom = document.querySelector("#btn-alert-custom")

btnAlertaCustom.onclick = function (){
    Swal.fire({
        title: "Custom Alert",
        text : "Alerta Personalizada",
        background: "url(${urlPochita})",
        color: "#fff",
        bacdrop:
        'rgba(0,0,0,0,3)url(https://media.tenor.com/no01nqqz-TYAAAAC/pochita-chainsaw-man.gif) left top no repeat',
    })
}
//-------------------------------------------------------------------------------
const btnAlertInputs = document.querySelector("#btn-alert-inputs")

btnAlertInputs.onclick = function(){
    Swal.fire({
        title: "Inputs para Email",
        input : "email",
        inputLabel: "Ingrese su correo",
        inputPlaceholder: "el correo debe ser valido",
    }).then ((resultado)=>{
        console.log(resultado.value)
    })
}

//-------------------------------------------------------------------------------------
const Paises = document.querySelector("#select-options")

Paises.onchange = function(event){
    const{value,options} = event.target;
    console.log("valor de event", value)

    const index = options.selectedIndex;
    console.log("index",index)
    console.log("texto",options[index].text)
}

const usuario = {
    nombre: "pepe",
    apellido: "zapata",
    edad: 30,
    direccion:{
        calle:"Calle viva",
        Numero: 133,
        Ciudad: "Springfield"
    }
}

const{nombre, apellido, edad, direccion} = usuario;
console.log(nombre);