const form = document.getElementById("formulario");
const input = document.getElementById("input");
const template = document.getElementById("template").content;
const tareaList = document.getElementById("lista-tareas");
const fragmento = document.createDocumentFragment();

let tareas = {};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    setTarea()
})

const setTarea=()=>{
    if(input.value.trim()===""){
        return;
    }
    const tarea = {
        id: Date.now(),
        text: input.value,
        estado: false
    };
    tareas[tarea.id]=tarea;
    
    formulario.reset();
    input.focus();
    pintarTareas()
}

const pintarTareas=()=> {
    tareaList.innerHTML= "";
    Object.values(tareas).forEach(tarea=>{
        const clone = template.cloneNode(true);
        clone.querySelector("p").textContent = tarea.texto;
        if(tarea.estado){
            clone.querySelector(".alert").classList.replace("alert-success",
            "alert-primary");
            clone.querySelectorAll(".fas")[0].dataset.id = tareas.id
            clone.querySelectorAll(".fas")[1].dataset.id = tareas.id
            fragmento.appendChild(clone);
            tareaList.appendChild(fragmento);
        }
    })
}

tareaList.addEventListener("click",(e)=>{
    action(e)
})

const action = e =>{
    if(e.target.classList.contains("fa-check-circle")){
        tareas[e.target.dataset.id].estado = true;
        pintarTareas()
    }else if (e.target.classList.contains("fa-minus-circle")){
        delete tareas[e.target.dataset.id]
    };
    if(e.target.classList.contains("fa-undo-alt")){
        tareas[e.target.dataset.id].estado = false
        pintarTareas();
    };
    e.stopPropagation
}