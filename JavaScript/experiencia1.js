// Experiencia de Práctica N° 01: Formas de Declarar Código JavaScript

// Función para saludar al hacer clic en el botón
function saludar() {
    alert("¡Bienvenido a este mundo!");
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón por su ID
    const boton = document.getElementById("miBoton");

    // Agregar un evento de clic al botón para llamar a la función de saludar
    boton.addEventListener("click", saludar);
});

