//Que es un objeto, se definen con {}
const carro = {
    color: "azul",
    motor: 1.6,
    modelo: "mustang",
    marca: "changan",
    nuevo: false
}

console.log("es un objeto de una persona: ", carro)

//object persona

const persona ={
    edad: 34,
    Nombre: "Eduardo",
    Sexo: "Masculino",
    Talla: 1.70,
    EstadoCivil: "Casado",
    MayorEdad: true,
    donacionDeOrganos: true
};

console.log("nombre", persona.Nombre);

// Reemplazar un dato

persona.Nombre = "Eduard";
persona.Talla = 1.75;

// Añadir dato

persona["profesion"] = "Ingeniero"

