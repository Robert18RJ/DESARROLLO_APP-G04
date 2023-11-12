// Utilizando el paquete MySQL2 para características adicionales
const mysql = require('mysql2');
// Configuración de conexión con opciones avanzadas
const conexionAvanzada = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'mi_usuario',
    password: 'mi_contraseña',
    database: 'mi_basededatos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
// Realizar conexión avanzada
conexionAvanzada.connect((error) => {
    if (error) {
        console.error('Error de conexión: ' + error.stack);
        return;
    }
    console.log('Conexión exitosa al ID ' + conexionAvanzada.threadId);
});
// Consulta avanzada de ejemplo
conexionAvanzada.query('SELECT * FROM mi_tabla', (error, resultados) => {
    if (error)
        throw error;
    resultados.forEach(elemento => {
        console.log(elemento);
    });
});
// Cerrar conexión avanzada
conexionAvanzada.end();
