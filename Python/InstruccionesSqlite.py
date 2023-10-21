import sqlite3

# Conectarse a la base de datos
conexion = sqlite3.connect("mi_base_de_datos.db")

# Crear un objeto cursor para ejecutar comandos SQL
cursor = conexion.cursor()

# Insertar datos en la tabla
cursor.execute("INSERT INTO empleados (nombre, salario) VALUES (?, ?)", ("Juan", 50000))
cursor.execute("INSERT INTO empleados (nombre, salario) VALUES (?, ?)", ("Ana", 60000))

# Guardar los cambios en la base de datos
conexion.commit()

# Recuperar datos de la tabla
cursor.execute("SELECT * FROM empleados")
empleados = cursor.fetchall()

# Mostrar los datos recuperados
for empleado in empleados:
    print(empleado)

# Cerrar la conexión con la base de datos
conexion.close()
