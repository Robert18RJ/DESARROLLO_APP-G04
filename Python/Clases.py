# Definición de la clase Persona
class Persona:
    # Constructor de la clase
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # Método para establecer el nombre de la persona
    def establecer_nombre(self, nuevo_nombre):
        self.nombre = nuevo_nombre

    # Método para obtener el nombre de la persona
    def obtener_nombre(self):
        return self.nombre

    # Método para establecer la edad de la persona
    def establecer_edad(self, nueva_edad):
        self.edad = nueva_edad

    # Método para obtener la edad de la persona
    def obtener_edad(self):
        return self.edad

# Crear una instancia de la clase Persona
persona1 = Persona("Juan", 30)

# Acceder y mostrar los atributos de la persona
print(f"Nombre: {persona1.obtener_nombre()}")
print(f"Edad: {persona1.obtener_edad()}")

# Modificar los atributos de la persona
persona1.establecer_nombre("Ana")
persona1.establecer_edad(25)

# Mostrar los atributos actualizados
print(f"Nombre: {persona1.obtener_nombre()}")
print(f"Edad: {persona1.obtener_edad()}")
