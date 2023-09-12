// Experiencia de Práctica N° 06: Uso de Objetos Globales

// Función para mostrar un mensaje de alerta después de un tiempo especificado por el usuario
function mostrarAlertaPersonalizada() {
    const tiempo = prompt("Ingresa el tiempo en milisegundos para mostrar la alerta:");
    if (tiempo !== null && !isNaN(tiempo) && tiempo > 0) {
        setTimeout(function () {
            alert("¡Esto es una alerta después de " + tiempo + " milisegundos!");
        }, tiempo);
    } else {
        alert("Por favor, ingresa un valor válido para el tiempo en milisegundos.");
    }
}

// Función para mostrar la fecha y hora actual en la página
function mostrarFechaYHoraActual() {
    const fecha = new Date();
    const fechaElement = document.getElementById("fechaHoraActual");
    fechaElement.textContent = "Fecha y Hora Actual: " + fecha.toLocaleString();
}

// Función para reiniciar la página
function reiniciarPagina() {
    location.reload();
}

// Función para redirigir a una página externa
function redirigirPagina() {
    const url = prompt("Ingresa la URL a la que deseas redirigir:");
    if (url !== null && url !== "") {
        window.location.href = url;
    }
}

// Llamar a la función de mostrarFechaYHoraActual al cargar el DOM
document.addEventListener("DOMContentLoaded", mostrarFechaYHoraActual);

