// 1. Crear un bloque de código cualquiera.
{
    // 2. Declarar una variable con ámbito de bloque en el bloque de código anterior.
    let variableBloque = "Variable de bloque";

    // 3. Declarar una constante en ámbito del bloque anterior.
    const CONSTANTE_BLOQUE = "Constante de bloque";

    // 4. Demostrar que las variables y constante tienen el determinado ámbito de bloque.
    console.log("Dentro del bloque:");
    console.log(variableBloque);
    console.log(CONSTANTE_BLOQUE);

    // 5. Grabar y visualizar los cambios.
    // No es necesario grabar los cambios en JavaScript.

    // 6. Corregir y actualizar la grabación.
    // No hay errores en el código, y las variables y constantes tienen ámbito de bloque.
}

// Intentamos acceder a la variable y constante desde fuera del bloque.
// Esto debería generar un error, ya que están fuera de su ámbito.
try {
    console.log("Fuera del bloque:");
    console.log(variableBloque);
    console.log(CONSTANTE_BLOQUE);
} catch (error) {
    console.error("Error:", error.message);
}
