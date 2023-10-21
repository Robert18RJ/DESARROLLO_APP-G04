import sqlite3

# Conectarse a la base de datos
conexion = sqlite3.connect("mi_base_de_datos.db")

# Crear un objeto cursor para ejecutar comandos SQL
cursor = conexion.cursor()

# Actualizar el salario de un empleado
nuevo_salario = 65000
nombre_empleado = "Juan"
cursor.execute("UPDATE empleados SET salario = ? WHERE nombre = ?", (nuevo_salario, nombre_empleado))
conexion.commit()

# Eliminar un empleado
nombre_empleado_a_eliminar = "Ana"
cursor.execute("DELETE FROM empleados WHERE nombre = ?", (nombre_empleado_a_eliminar,))
conexion.commit()

# Recuperar empleados con un salario mayor a 60000
cursor.execute("SELECT * FROM empleados WHERE salario > ?", (60000,))
empleados_filtrados = cursor.fetchall()

# Mostrar los empleados que cumplen con el filtro
for empleado in empleados_filtrados:
    print(empleado)

# Cerrar la conexión con la base de datos
conexion.close()
