import sqlite3

# Conectarse a la base de datos o crearla si no existe
conexion = sqlite3.connect("mi_base_de_datos.db")

# Crear un objeto cursor para ejecutar comandos SQL
cursor = conexion.cursor()

# Crear una tabla en la base de datos
cursor.execute('''CREATE TABLE IF NOT EXISTS empleados (
                    id INTEGER PRIMARY KEY,
                    nombre TEXT NOT NULL,
                    salario REAL)''')

# Guardar los cambios en la base de datos
conexion.commit()

# Cerrar la conexión con la base de datos
conexion.close()
