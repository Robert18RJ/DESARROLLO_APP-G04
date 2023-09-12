// Experiencia de Práctica N° 03: Uso de Funciones

// Función para calcular el área de un rectángulo
function calcularArea(ancho, alto) {
    return ancho * alto;
}

// Función para mostrar el resultado en la página
function mostrarResultado() {
    const ancho = 2;
    const alto = 10;
    const area = calcularArea(ancho, alto);
    const resultadoElement = document.getElementById("resultado");

    // Mostrar el resultado en la página
    resultadoElement.textContent = `El área de un rectángulo con ancho ${ancho} y alto ${alto} es: ${area}`;
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    mostrarResultado();
});
