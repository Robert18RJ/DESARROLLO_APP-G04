// Experiencia de Práctica N° 02: Uso de Recursos del Lenguaje

// Función para mostrar un mensaje en la consola
function mostrarMensaje() {
    console.log("Este es un mensaje en la consola.");
}

// Función para mostrar mensajes en la página
function mostrarMensajeEnPagina() {
    const mensaje = "Hola de nuevo, espero iniciemos una nueba practica.";
    document.getElementById("mensaje").textContent = mensaje;
}

// Funciones para mostrar mensajes de saludo
function sayHello() {
    return "Iniciemos , ";
}
function greeting(helloMessage, name) {
    const mensaje = helloMessage() + name;
    document.getElementById("saludo").textContent = mensaje;
}

// Función de cierre (closure)
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    mostrarMensaje();
    mostrarMensajeEnPagina();
    greeting(sayHello, "en JavaScript");
    const myFunc = makeFunc();
    myFunc();
});

