// Experiencia de Práctica N° 04: Uso de Objetos

// Definir un objeto persona
const persona = {
    nombre: "Juan",
    edad: 30
};

// Definir un constructor de objetos Mascota
function Mascota(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
}

// Crear una instancia de Mascota
const miMascota = new Mascota("Bobby", "Perro");

// Usar Object Literal para crear un objeto coche
const coche = {
    marca: "Toyota",
    modelo: "Camry"
};

// Mostrar información de los objetos en la página
document.getElementById("infoPersona").textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
document.getElementById("infoMascota").textContent = `Nombre de la mascota: ${miMascota.nombre}, Especie: ${miMascota.especie}`;
document.getElementById("infoCoche").textContent = `Marca: ${coche.marca}, Modelo: ${coche.modelo}`;
