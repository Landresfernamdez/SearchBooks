/*
=================================================
=   Autor: Eliomar Antonio Rodríguez Arguedas   =
=                                               =
=   Web Service para el proyecto OthelloTEC     =
=   Ingeniería en Computación                   =
=   TEC San Carlos                              =
=================================================

===============================================================
>  Archivos donde estan los controladores en el servidor.     <
===============================================================
*/
var componenteCtrl = require('./Controladores/controladorComponentes'); // controlador de Componentes
/*
===============================================================================
>  Configuraciones principales del servidor, con esto escucha las peticiones  <
===============================================================================
*/
var bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/"Server"'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
===========================================
>  Inicio de las direcciones (Endpoints)  <
===========================================

/** tipos de consulta, implementar!
 * post insert
 * get  select
 * put  edit
 * delete   delete
 */
/*
==================================
>  EndPoints de los Componentes  < // bien todos
==================================
*/

app.post('/movimiento', componenteCtrl.realizarMovimiento);
app.get('/selectComponentes', componenteCtrl.selectComponente);
//app.post('/deleteComponente', componenteCtrl.deleteComponente);
app.post('/Login',componenteCtrl.login);
app.post('/validaCorreo',componenteCtrl.validaCorreo);
app.post('/insertarUsuario',componenteCtrl.insertarUsuario);
app.post('/agregarSesion',componenteCtrl.insertarSesion);
app.get('/selectSesionesJuegoDisponibles', componenteCtrl.selectSesionesJuegoDisponibles);
app.post('/putUsuarioasesiondeJuego',componenteCtrl.insertarUsuarioSesion);
app.post('/misSesiones',componenteCtrl.misSesiones);
app.post('/detallesSesion',componenteCtrl.detalles);
app.post('/partidaActual',componenteCtrl.partidaActual);
/*
======================================================================================
>  Pone el servidor en escucha de peticiones, lo levanta en el puerto especificado.  <
======================================================================================
*/
server.listen(port, function(){
    console.log('Servidor escuchando en el puerto: ' + port);
});