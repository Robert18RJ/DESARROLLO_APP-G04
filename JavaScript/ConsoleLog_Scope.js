// 1. Utilice console.log() para imprimir los valores de las variables sin asignar.
console.log("1. Valores sin asignar:");
console.log("x:", x);
console.log("y:", y);

// 2. Crear funciones anidadas y verifique el alcance (scope) de las variables y funciones.
function outerFunction() {
  var x = 10;
  console.log("2.1. Alcance en outerFunction:");
  console.log("x:", x);
  console.log("y:", y);

  function innerFunction() {
    var y = 20;
    console.log("2.2. Alcance en innerFunction:");
    console.log("x:", x);
    console.log("y:", y);

    // Función anidada dentro de innerFunction
    function nestedFunction() {
      var z = 30;
      console.log("2.3. Alcance en nestedFunction:");
      console.log("x:", x);
      console.log("y:", y);
      console.log("z:", z);
    }

    nestedFunction();
  }

  innerFunction();
}

var y = 5;

// Llamamos a outerFunction para iniciar la secuencia.
outerFunction();

// 3. Grabar y visualizar los cambios.
// No es necesario grabar cambios en JavaScript.

// 4. Corregir y actualizar la grabación.
// No hay errores en el código. Sin embargo, es importante notar cómo las variables con el mismo nombre en diferentes ámbitos tienen valores distintos.
