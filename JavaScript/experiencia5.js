// Arrays para almacenar datos
const arrayNumerico1 = [];
const arrayStrings2 = [];
const arrayObjetos3 = [];

// Función para agregar un número al array numérico
function agregarNumero() {
  const numero = parseInt(document.getElementById("numero").value);
  if (!isNaN(numero)) {
    arrayNumerico1.push(numero);
    document.getElementById("numero").value = '';
    mostrarArrays();
  }
}

// Función para agregar un texto al array de strings
function agregarTexto() {
  const texto = document.getElementById("texto").value;
  if (texto.trim() !== '') {
    arrayStrings2.push(texto);
    document.getElementById("texto").value = '';
    mostrarArrays();
  }
}

// Función para agregar un objeto al array de objetos
function agregarObjeto() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  if (nombre.trim() !== '' && !isNaN(edad)) {
    const nuevoObjeto = { nombre, edad };
    arrayObjetos3.push(nuevoObjeto);
    document.getElementById("nombre").value = '';
    document.getElementById("edad").value = '';
    mostrarArrays();
  }
}

// Función para guardar los arrays en el almacenamiento local
function guardarArrays() {
  localStorage.setItem("arrayNumerico", JSON.stringify(arrayNumerico1));
  localStorage.setItem("arrayStrings", JSON.stringify(arrayStrings2));
  localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos3));
  mostrarArrays();
}

// Función para eliminar todos los arrays
function eliminarArrays() {
  arrayNumerico1.length = 0;
  arrayStrings2.length = 0;
  arrayObjetos3.length = 0;
  localStorage.clear();
  mostrarArrays();
}

// Función para mostrar todos los arrays en la página
function mostrarArrays() {
  document.getElementById("arrayNumerico").textContent = `Array Numérico: ${JSON.stringify(arrayNumerico1)}`;
  document.getElementById("arrayStrings").textContent = `Array de Strings: ${JSON.stringify(arrayStrings2)}`;
  document.getElementById("arrayObjetos").textContent = `Array de Objetos: ${JSON.stringify(arrayObjetos3)}`;
}

// Cargar los arrays desde el almacenamiento local al cargar la página
window.onload = function () {
  const storedNumerico = localStorage.getItem("arrayNumerico");
  const storedStrings = localStorage.getItem("arrayStrings");
  const storedObjetos = localStorage.getItem("arrayObjetos");

  if (storedNumerico) {
    arrayNumerico1.push(...JSON.parse(storedNumerico));
  }

  if (storedStrings) {
    arrayStrings2.push(...JSON.parse(storedStrings));
  }

  if (storedObjetos) {
    arrayObjetos3.push(...JSON.parse(storedObjetos));
  }

  mostrarArrays();
};
