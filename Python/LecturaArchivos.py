# 1. Abre un archivo de texto en modo lectura
try:
    with open('Python.txt', 'r') as archivo:
        # 2. Lee el contenido del archivo línea por línea
        lineas = archivo.readlines()

        # 3. Procesa cada línea
        for linea in lineas:
            # 4. Realiza operaciones con cada línea, por ejemplo, imprimirla
            print(linea, end='')

except FileNotFoundError:
    print("El archivo no se encontró. Verifique el nombre o la ubicación del archivo.")

# 5. Cierra automáticamente el archivo al salir del bloque "with"
