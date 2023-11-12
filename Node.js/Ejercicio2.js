// Importar el paquete Express
const express = require('express');

// Crear la aplicación en Express
const app = express();

// Enrutamiento dinámico basado en parámetros de URL
app.get('/:usuario', (req, res) => {
    const usuario = req.params.usuario;
    res.send(`¡Hola ${usuario}! Bienvenido a mi aplicación con Express.`);
});

// El servidor de escucha que desplegará la aplicación
app.listen(3000, () => {
    console.log('La aplicación Express con enrutamiento dinámico está funcionando en el puerto 3000');
});
