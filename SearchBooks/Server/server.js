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
app.post('/agregarLibros',componenteCtrl.agregarLibros);
app.get('/devuelveUltimo',componenteCtrl.obtenerUltimo);
app.get('/todosLibros',componenteCtrl.todosLibros);
app.post('/modificarLibro',componenteCtrl.modificarLibros);
app.post('/eliminarLibros',componenteCtrl.eliminarLibros);


app.get('/todosUsuarios',componenteCtrl.todosUsuarios);
app.get('/todosUsuariosR',componenteCtrl.todosUsuariosRegistrados);

app.post('/iniciarSesion',componenteCtrl.inicioSesion);
app.post('/asignarPermiso',componenteCtrl.asignarPermisos);
app.post('/cambiarEstadoUsuario',componenteCtrl.cambiarEstadoUsuario);

app.post('/tienepermisosEncargado',componenteCtrl.tienepermisosEncargado);
/*
======================================================================================
>  Pone el servidor en escucha de peticiones, lo levanta en el puerto especificado.  <
======================================================================================
*/
server.listen(port, function(){
    console.log('Servidor escuchando en el puerto: ' + port);
});