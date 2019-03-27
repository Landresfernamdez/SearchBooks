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
/**
 *    Función de insertar libro en la base de datos
 * @param {Recibe un json con atributos de las tablas} datos 
 * @param {*Recibe una funcion por parametro para devolver el resultado del request a la base de datos} callback 
 */
exports.insertarLibro = function insertarLibro(datos, callback) {
    var request = new Request('AgregarLibro', function (err) { // nombre de procedimiento en la base de datos
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
    request.addParameter('titulo', TYPES.VarChar, datos.titulo);
    request.addParameter('autor', TYPES.VarChar, datos.autor);
    request.addParameter('ano', TYPES.VarChar, datos.ano);
    request.addParameter('numeroInscripcion', TYPES.VarChar, datos.numeroInscripcion);
    request.addParameter('numeroClasificacion', TYPES.VarChar, datos.numeroClasificacion);
    request.addParameter('orden', TYPES.VarChar, datos.orden);
    request.addParameter('bib', TYPES.VarChar, datos.bib);
    request.addParameter('precio', TYPES.VarChar, datos.precio);
    request.addParameter('procedencia', TYPES.VarChar, datos.procedencia);
    request.addParameter('observaciones', TYPES.VarChar, datos.observaciones);
    request.addParameter('coleccion', TYPES.VarChar, datos.coleccion);
    request.addParameter('formato', TYPES.VarChar, datos.formato);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function (res) {
        callback(res);
    });
}

exports.insertarUsuario = function insertarUsuario(datos, callback) {
    var request = new Request('AgregarUsuario', function (err) { // nombre de procedimiento en la base de datos
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
    request.addParameter('nombre', TYPES.VarChar, datos.nombre);
    request.addParameter('cedula', TYPES.VarChar, datos.cedula);
    request.addParameter('apellido1', TYPES.VarChar, datos.apellido1);
    request.addParameter('apellido2', TYPES.VarChar, datos.apellido2);
    request.addParameter('contraseña', TYPES.VarChar, datos.clave);
    request.addParameter('nombreusuario', TYPES.VarChar, datos.nombreusuario);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function (res) {
        callback(res);
    });
}
/**
 * Función de modificar libro en la base de datos
 * @param {Recibe un json con atributos de las tablas} datos 
 * @param {*Recibe una funcion por parametro para devolver el resultado del request a la base de datos} callback 
 */
exports.modificarLibro = function modificarLibro(datos, callback) {
        var request = new Request('ModificarLibro', function (err) { // nombre de procedimiento en la base de datos
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
        request.addParameter('titulo', TYPES.VarChar, datos.titulo);
        request.addParameter('autor', TYPES.VarChar, datos.autor);
        request.addParameter('ano', TYPES.VarChar, datos.ano);
        request.addParameter('numeroInscripcion', TYPES.VarChar, datos.numeroInscripcion);
        request.addParameter('numeroClasificacion', TYPES.VarChar, datos.numeroClasificacion);
        request.addParameter('orden', TYPES.VarChar, datos.orden);
        request.addParameter('bib', TYPES.VarChar, datos.bib);
        request.addParameter('precio', TYPES.VarChar, datos.precio);
        request.addParameter('procedencia', TYPES.VarChar, datos.procedencia);
        request.addParameter('observaciones', TYPES.VarChar, datos.observaciones);
        request.addParameter('coleccion', TYPES.VarChar, datos.coleccion);
        request.addParameter('formato', TYPES.VarChar, datos.formato);
        request.addOutputParameter('success', TYPES.Bit);
        sqlConection.callProcedure(request, function (res) {
            callback(res);
        });
}

    exports.modificarUsuario = function modificarUsuario(datos, callback) {
        var request = new Request('ModificarUsuario', function (err) { // nombre de procedimiento en la base de datos
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
        request.addParameter('id', TYPES.Int, datos.id);
        request.addParameter('nombre', TYPES.VarChar, datos.nombre);
        request.addParameter('cedula', TYPES.VarChar, datos.cedula);
        request.addParameter('apellido1', TYPES.VarChar, datos.apellido1);
        request.addParameter('apellido2', TYPES.VarChar, datos.apellido2);
        request.addParameter('contraseña', TYPES.VarChar, datos.clave);
        request.addParameter('rol', TYPES.VarChar, datos.rol);
        request.addParameter('nombreusuario', TYPES.VarChar, datos.nombreusuario);
        request.addOutputParameter('success', TYPES.Bit);
        sqlConection.callProcedure(request, function (res) {
            callback(res);
        });
    }

    exports.eliminarUsuario = function eliminarUsuario(datos, callback) {
        var request = new Request('EliminarUsuario', function (err) { // nombre de procedimiento en la base de datos
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
        request.addParameter('id', TYPES.Int, datos.id);
        request.addOutputParameter('success', TYPES.Bit);
        sqlConection.callProcedure(request, function (res) {
            callback(res);
        });
    }
exports.eliminarLibro = function eliminarLibros(datos, callback) {
        var request = new Request('EliminarLibro', function (err) { // nombre de procedimiento en la base de datos
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
        request.addParameter('id', TYPES.Int, datos.id);
        request.addOutputParameter('success', TYPES.Bit);
        sqlConection.callProcedure(request, function (res) {
            callback(res);
        });
    }
/**
 * Retorna el ultimo elemento de la tabla de libros
 * @param {Recibe un json con atributos de las tablas} datos 
 * @param {*Recibe una funcion por parametro para devolver el resultado del request a la base de datos} callback 
 */
exports.ultimo = function ultimo(datos, callback) {
    var request = new Request('selectUltimo', function (err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error obteniendo el utimo",
                type: "error"
            })
        }
    });
    sqlConection.callProcedure(request, function (res) {
        callback(res);
    });
}
exports.inicioSesion = function inicioSesion(datos, callback) {
    var request = new Request('InicioSesionUsuario', function (err) { // nombre de procedimiento en la base de datos
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error obteniendo el utimo",
                type: "error"
            })
        }
    });
    request.addParameter('nombreusuario', TYPES.VarChar, datos.nombreusuario);
    request.addParameter('contraseña', TYPES.VarChar, datos.clave);
    request.addParameter('rol', TYPES.VarChar, datos.rol);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConection.callProcedure(request, function (res) {
        callback(res);
    });
}
/**
 * Retorna todos los libros 
 * @param {Retorna el resultado de la peticion} callback 
 */
exports.todosLibros = function (callback) {
    var query = "SELECT * FROM Libros where titulo!='NULL'";
    var request = new Request(query, function (err) {
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
    sqlConection.executeRequest(request, callback);
}

exports.todosUsuarios = function (callback) {
    var query = "SELECT * FROM Usuarios";
    var request = new Request(query, function (err) {
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
    sqlConection.executeRequest(request, callback);
}