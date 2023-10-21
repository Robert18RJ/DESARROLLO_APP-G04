# Definición de la clase Calculadora
class Calculadora:
    # Constructor de la clase
    def __init__(self):
        pass  # No es necesario inicializar atributos en este caso

    # Método para sumar dos números
    def sumar(self, num1, num2):
        resultado = num1 + num2
        return resultado

    # Método para restar dos números
    def restar(self, num1, num2):
        resultado = num1 - num2
        return resultado

    # Método para multiplicar dos números
    def multiplicar(self, num1, num2):
        resultado = num1 * num2
        return resultado

    # Método para dividir dos números
    def dividir(self, num1, num2):
        if num2 != 0:
            resultado = num1 / num2
            return resultado
        else:
            return "Error: División por cero"

# Crear una instancia de la clase Calculadora
mi_calculadora = Calculadora()

# Realizar operaciones utilizando los métodos de la calculadora
resultado_suma = mi_calculadora.sumar(5, 3)
resultado_resta = mi_calculadora.restar(10, 4)
resultado_multiplicacion = mi_calculadora.multiplicar(6, 7)
resultado_division = mi_calculadora.dividir(12, 4)

# Mostrar los resultados
print(f"Suma: {resultado_suma}")
print(f"Resta: {resultado_resta}")
print(f"Multiplicación: {resultado_multiplicacion}")
print(f"División: {resultado_division}")
