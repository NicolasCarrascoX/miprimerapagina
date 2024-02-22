//alert("Hola este es mi Javascript");
//let nombre = "Nicolas";
//nombre = "Maria"

//var nombre = "Nicolas";

//const nombre2 = "Nicolas";
//nombre2 = "Maria":

//console.log(nombre);
//console.log(nombre1):
//console.log(nombre2):

let contenido_titulo = "Acerca de mi";
let titulo = document.getElementsByClassName(".titulo");
titulo.innerHTML = contenido_titulo;

let text_titulo = titulo.innerHTML;
console.log(titulo);

if (titulo == "Acerca de mi") {
    titulo.innerHTML = "arbol";
} else {
    console.log("no se cumple")
};

let acercademi = document.querySelector(".Acerca-de-mi");

//function cambiarTexto(contenido_titulo){
    let contenido = "Quien soy";

    return contenido;
}

acercademi.innerText = cambiarTexto(contenido_titulo);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

const form = document.getElementById("form"); 
const parrafo = document.getElementById("alerta"); 

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    const nombre = document.getElementById("nombre"); // Obtener referencia al campo de nombre

    if (nombre.value.length <= 4) { // Ajustar la condición según tus requisitos
        warnings += `El nombre debe contener más de 4 caracteres`; // Corregir el mensaje
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (!validarFormulario()) {
        e.preventDefault(); // Evitar envío del formulario si la validación falla
    }
});

