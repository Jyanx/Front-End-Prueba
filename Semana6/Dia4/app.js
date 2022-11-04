// Que es un API
//APPLICATION PROGRAMING INTERFACE
//ES UN SERVICIO DE INFORMACION QUE PUEDE PROVEERLA O CREARLA

//EN JS EXISTE UNA FUNCION LA CUAL SE AGREGA DE PODER HACER LA PETICION
//FETCH()
// EXISTE TIPOS DE PETICIONES LAS MAS IMPORTANTES SON
// GET = OBTENER INFORMACION
//POST = CREAR DATOS
// PUT = ACTUALIZAR DATOS
// DELETE = ELIMINAR DATOS
// FUNCTION ASYNC
// LAS FUNCIONES ASYNC FUERON CREADAS PARA PODER EJECUTAR ALGO

const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-follower");
const githubFollowing = document.querySelector("#github-follow");
const githubLocation = document.querySelector("#github-location");
const githubTwitter = document.querySelector("#github-twitter");
const githubJoined = document.querySelector("#github-joined");
const githubLink = document.querySelector("#github-link");
const githubCompany = document.querySelector("#github-company");
// Ahora el input y el button
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-input-search");

githubActionSearch.onclick = ()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value ="";
    // Nos falta validar si el input esta vacio
    if (username === ""){
        Swal.fire({
            title: "error",
            text: "Debes de ingresar un valor",
            icon: "error",
        });
        return;
    }
    obtenerDatosGithub(username);
};
githubInputSearch.addEventListener("keyup", function (event){
    if (event.key === "Enter"){
        obtenerDatosGithub(event.target.value)
    }
});

const obtenerDatosGithub = async(username = "Jyanx")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if(data.message === "Not found"){
        Swal.fire({
            title: "error",
            text: "No se encontro",
            icon: "error",
        });
        return;
    }
    setDataUser(data);
};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}

const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUsername.innerHTML = `@${data.login}`;
    githubJoined.innerHTML = formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubTwitter.innerHTML = data.twitter_username;
    githubLocation.innerHTML = data.location;
    githubLink.innerHTML = data.html_url;
    githubCompany.innerHTML = data.company;
};