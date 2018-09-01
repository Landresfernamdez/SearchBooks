var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var sqlConection = require('../ConexionDBs/sqlConection.js');

/*
===========================
>  CRUD's de Componentes  <
>   - insert              <
>   - select              <
>   - edit                <
>   - delete              <
===========================
*/
exports.insertarLibro = function insertarLibro(datos, callback) {
    var request = new Request('AgregarLibro', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('titulo', TYPES.VarChar, datos.titulo);
    request.addParameter('autor', TYPES.VarChar, datos.autor);
    request.addParameter('ano', TYPES.Int, datos.ano);
    request.addParameter('numeroInscripcion',TYPES.VarChar);
    request.addParameter('numeroClasificacion',TYPES.VarChar);
    request.addParameter('orden',TYPES.VarChar);
    request.addParameter('bib', TYPES.Int, datos.bib);
    request.addParameter('precio', TYPES.Int, datos.precio);
    request.addParameter('procedencia',TYPES.VarChar);
    request.addParameter('observaciones',TYPES.VarChar);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}
/*
//Valida si existe el usuario con su correo y contraseña
exports.login = function login(datos, callback) {
    var request = new Request('selectUsuario', function(err) { // nombre de procedimiento en la base de datos
        if (err){
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('Correo', TYPES.VarChar, datos.correo);
    request.addParameter('Contrasenia', TYPES.VarChar, datos.clave);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        callback(res);
    });
}
//Valida si existe el usuario con su correo
exports.validaCorreo = function validaCorreo(datos, callback) {
    var request = new Request('existeUsuario', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('Correo', TYPES.VarChar, datos.correo);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        callback(res);
    });
}
exports.insertarUsuario = function insertarUsuario(datos, callback) {
    var request = new Request('insertUsuario', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('Correo', TYPES.VarChar, datos.correo);
    request.addParameter('Nickname', TYPES.VarChar, datos.nickname);
    request.addParameter('Contrasena', TYPES.VarChar, datos.clave);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}

exports.insertarSesion = function insertarSesion(datos, callback) {
    var request = new Request('insertSesionJuego', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('NumPartidas', TYPES.Int, datos.partidas);
    request.addParameter('N_Tablero', TYPES.Int, datos.n);
    request.addParameter('NivelDificultad', TYPES.Int, datos.nivel);
    request.addParameter('TipoPartida', TYPES.Int, datos.tipo);
    request.addParameter('IdUsuario', TYPES.VarChar, datos.correo);
    request.addParameter('colorFicha', TYPES.VarChar, datos.color);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}
exports.insertarUsuarioSesion = function insertarUsuarioSesion(datos, callback) {
    var request = new Request('insertUsuario_SesionJuego', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('ID_SesionJuego', TYPES.Int, datos.idsesion);
    request.addParameter('Correo', TYPES.VarChar, datos.correo);
    request.addParameter('colorFicha', TYPES.VarChar, datos.color);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}
exports.selectSesionesJuegoDisponibles = function(callback) {
    var query = "SELECT us.ID,us.Correo,us.Nickname,temp.ID_SJ,temp.N_Tablero,temp.NivelDificultad,temp.TipoPartida,temp.NumPartidas FROM Usuarios as us inner join "+
    "(SELECT * FROM SesionesJuego  as sj inner join Usuarios_SesionJuego as u on  sj.Estado = 0 and u.ID_SJ=sj.ID) as temp"+
    " on us.ID=temp.ID";
    var request = new Request(query, function(err) {
        if (err) {
            callback({
                success: false,
                data: err,
                error: request.error,
                title: "Error",
                message: "Error obteniendo los datos. Revise su conexión",
                type: "error"
            });
        }
    });
    // se usa executeRequest porque es el destinado para escribir consultas desde aca en vez de llamar procedimientos almacenados
    sqlConection.executeRequest(request, callback); 
}

exports.misSesiones = function misSesiones(datos, callback) {
    var request = new Request('misSesiones', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('correo', TYPES.VarChar, datos.correo);
    request.addParameter('filtro', TYPES.Char, datos.filtro);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}

exports.detalles = function detalles(datos, callback) {
    var request = new Request('devuelvePartidas', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('ID_S', TYPES.Int, datos.id_sesion);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}

exports.partidaActual = function partidaActual(datos, callback) {
    var request = new Request('partidaActual', function(err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Error en la recuperacion de la partida",
                type: "error"
            })
        }
    });
    console.log(datos);
    request.addParameter('ID_S', TYPES.Int, datos.id_sesion);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function(res) {
        console.log("prueba");
        console.log(res);
        callback(res);
    });
}
exports.selectComponente = function(callback) {
    var request = new Request("SELECT * FROM Componentes", function(err) {
        if (err) {
            callback({
                success: false,
                data: err,
                error: request.error,
                title: "Error",
                message: "Error obteniendo los datos. Revise su conexión",
                type: "error"
            });
        }
    });
    // se usa executeRequest porque es el destinado para escribir consultas desde aca en vez de llamar procedimientos almacenados
    sqlConection.executeRequest(request, callback); 
}
exports.editComponente = function editComponente(datos, callback) {
    var request = new Request('realizarMovimiento', function(err) {
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la modificación de los datos",
                type: "error"
            })
        }
    });
    //request.addParameter('ID_Partida', TYPES.Int, datos.ID);
    //request.addParameter('Matriz', TYPES.VarChar, datos.ID_Dimension);

   // request.addOutputParameter('success', TYPES.Bit);

   // sqlConection.callProcedure(request, callback);
};
// DELETE 
exports.deleteComponente = function deleteComponente(datos, callback) {
    var request = new Request('deleteComponente', function(err) {
        if (err) {
            msg = (request.error == 1) ? "Error de conexión" : "No se puede eliminar el componente";
            callback({
                success: false,
                data: err,
                error: request.error,
                title: "Error",
                message: msg,
                type: "error"
            })
        }
    });
    request.addParameter('ID_Componente', TYPES.Int, datos.ID);
    
    request.addOutputParameter('success', TYPES.Bit);

    sqlConection.callProcedure(request, callback);
}*/