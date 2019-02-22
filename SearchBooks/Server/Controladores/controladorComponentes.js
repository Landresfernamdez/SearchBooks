/*
================================================
>  Controlador de los Componentes del sistema  <
================================================
*/
var controlador = require('../Logica/logicaComponentes');

exports.agregarLibros = function(rRequest, rResponse){
    controlador.insertarLibros(rRequest.body, function(data){
        rResponse.send(data);
    });
};
exports.modificarLibros = function(rRequest, rResponse){
    controlador.modificarLibros(rRequest.body, function(data){
        rResponse.send(data);
    });
};

exports.obtenerUltimo = function(rRequest, rResponse){
    controlador.devuelveUltimo(rRequest.body, function(data){
        rResponse.send(data);
    });
};
exports.todosLibros = function(rRequest, rResponse){
    controlador.todosLibros(function(data){
        rResponse.send(data.data);
    });
};
