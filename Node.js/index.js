// importando paquete Express
var express = require('express');
// creando aplicaci�n en Express
var app = express();
// Creando manejadores de rutas
app.get('/',function(req,res){
res.send('Hola mundo desde Express');
})
app.get('/login',function(req,res){
res.send('Aqu� se mostrar�a la pagina del login');
})
// El servidor de escucha que desplegar� mi ruta HTTP
app.listen(3000,function(){
console.log('La aplicaci�n est� funcionando en el puerto 30000');
});