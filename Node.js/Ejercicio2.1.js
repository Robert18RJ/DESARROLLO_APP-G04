// Importar el paquete Express
const express = require('express');

// Crear la aplicación en Express
const app = express();

// Middleware personalizado que registra la hora de cada solicitud
const registrarHoraMiddleware = (req, res, next) => {
    const horaActual = new Date().toLocaleTimeString();
    console.log(`Solicitud recibida a las ${horaActual}`);
    next();
};

// Aplicar el middleware a todas las rutas
app.use(registrarHoraMiddleware);

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación con middleware en Express!');
});

// El servidor de escucha que desplegará la aplicación
app.listen(3000, () => {
    console.log('La aplicación Express con middleware avanzado está funcionando en el puerto 3000');
});
