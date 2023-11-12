// Importar librería http
const http = require('http');
// Crear servidor personalizado
const server = http.createServer();
// Función de respuesta personalizada
function respuestaPersonalizada(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("¡Bienvenido a mi aplicacion personalizada de Node.js!");
    response.end();
}
// Asignar función de respuesta al servidor
server.on('request', respuestaPersonalizada);
// Levantar servidor en el puerto 3001
server.listen(3001, () => {
    console.log('La aplicación personalizada de Node.js está funcionando en el puerto 3001');
});
