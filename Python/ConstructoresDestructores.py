class MiClase:
    # Constructor (método __init__)
    def __init__(self, nombre):
        self.nombre = nombre
        print(f"Se ha creado un objeto de la clase {self.nombre}")

    # Método especial __del__ (no es un destructor en el sentido tradicional)
    def __del__(self):
        print(f"Se está eliminando el objeto {self.nombre}")

# Crear instancias de la clase
objeto1 = MiClase("Instancia1")
objeto2 = MiClase("Instancia2")

# Eliminar una instancia explícitamente
del objeto1

# La instancia objeto2 será eliminada automáticamente cuando el programa termine
