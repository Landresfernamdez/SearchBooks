var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var sqlConection = require('../ConexionDBs/sqlConection.js');
var sqlConectioninfoTEC = require('../ConexionDBs/sqkConectionInfoTEC.js');
var sqlConectioniBiblioscTEC = require('../ConexionDBs/sqlConnectionBiblioSC.js');
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
    setTimeout(() => {
        sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
            callback(res);
        });
    }, 5000);
}

exports.asignarPermisos = function asignarPermisos(datos, callback) {
    var request = new Request('asignarPermiso', function (err) { // nombre de procedimiento en la base de datos
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
    request.addParameter('NOMBRE_ENCARGADO', TYPES.VarChar,datos.nombre);
    request.addParameter('NOMBRE_APLICACION', TYPES.VarChar, datos.nombre_app);
    request.addParameter('ROL', TYPES.VarChar, datos.rol);
    request.addParameter('FECHA_ASIGNACION', TYPES.VarChar, datos.fechaAsignacion);
    request.addParameter('FECHA_VENCIMIENTO', TYPES.VarChar, datos.fechaVencimiento); 
    request.addOutputParameter('success', TYPES.Bit);
    sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
        callback(res);
    });
}

exports.cambiarEstadoUsuario = function cambiarEstadoUsuario(datos, callback) {
    var request = new Request('cambiarEstadoUsuario', function (err) { // nombre de procedimiento en la base de datos
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
    request.addParameter('ID_ENCARGADO', TYPES.VarChar,datos.id_encargado);
    request.addParameter('ESTADO', TYPES.VarChar, datos.estado);
    request.addOutputParameter('success', TYPES.Bit);
    sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
        callback(res);
    });
}
exports.esEncargado = function esEncargado(datos, callback) {
    var request = new Request('tienepermisosEncargado', function (err) { // nombre de procedimiento en la base de datos
        if (err) {
            console.log("Entro")
            console.log(err)
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "Sucedio un error en la inserción de los datos",
                type: "error"
            })
        }
    });
    request.addParameter('NOMBRE_ENCARGADO', TYPES.VarChar,datos.nombre);
    sqlConectioniBiblioscTEC.callProcedureDone(request, function (res) {
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
    sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
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
    sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
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
    sqlConectioniBiblioscTEC.callProcedure(request, function (res) {
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
    var query = "SELECT * FROM Libros";
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
    sqlConectioniBiblioscTEC.executeRequest(request, callback);
}

exports.todosUsuarios = function (callback) {
    var query = "SELECT ps.idRol,dpd.nombre,dpd.pass,dpd.IDPer,dpd.fechaNacimiento,dpd.carne,dpd.apellido1,dpd.apellido2,dpd.estadoCivil,dpd.sexo,dpd.direccion,dpd.gradoAcademico,dpd.correo FROM Persona_Rol as ps INNER JOIN (SELECT * FROM Persona AS p INNER JOIN Persona_departamentos AS pd on pd.IDPer=p.ID AND pd.codigoDep='110') AS dpd ON ps.idPersona=dpd.IDPer";
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
    sqlConectioninfoTEC.executeRequest(request, callback);
}
exports.todosUsuariosRegistrados = function (callback) {
    
    console.log("Entro a prueba")
    var query = "SELECT * FROM ENCARGADOS";
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
    sqlConectioniBiblioscTEC.executeRequest(request, callback);
}