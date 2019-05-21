import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UsersService } from '../users.service';
@Component({
    selector: 'dialog-add-permisos',
    templateUrl: 'dialog-add-permisos.html',
  })
  export class DialogContentExampleDialog {
    usersfc = new FormControl();
    public users;
    public usuariosRegistrados;
    public roles;
    public aplicaciones;//Lista de aplicaciones de las que el usuario no tiene permisos aun
    user: string;
    snackbar: MatSnackBar;
    listaAplicaciones = [];
    fechaInicio: Date = new Date();
    fechaFinal: Date = new Date();
    rol: Int32Array;
    constructor(private service: UsersService, private snackBar: MatSnackBar, public dialog: MatDialog) {
      this.snackbar = snackBar;
      this.roles = [{ tipo: "Administrador", valor: 0 }, { tipo: "Encargado", valor: 1 }, { tipo: "Asistente", valor: 2 }];
      //Aun no hay datos de InfoTEC
      /*this.service.devuelveTodosUsuarios().subscribe(response => {
        this.users = response;
        console.log(this.users);
        for (var x = 0; x < this.users.length; x++) {
          this.users[x].pass = this.users[x].pass;
        }
      }
      )*/
      this.users = [{ nombre: "Andres Fernández" }, { nombre: "Ramiro" }]
      console.log("Entro")
  
    }
  
    obtieneAplicaciones() {
      this.service.tienepermisosEncargado({ nombre: this.user }).then(
        Response => {
          if (Response.success) {//Devolver solo las aplicaciones  de las cuales el usuario aun no tiene permisos
            this.aplicaciones = Response.data;
          } else {//Devolver todas las aplicaciones
            console.log("El usuario no existe")
          }
        }
      ).catch(e => {
        console.log(e)
      });
    }
    verlista() {
      console.log(this.listaAplicaciones)
    }
    notificar(messaje, action) {
      this.snackbar.open(messaje, action, {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
    changeFormat(fecha) {
      var year = this.fechaInicio.getFullYear();
      var month = ("0" + (this.fechaInicio.getMonth() + 1)).slice(-2);
      var date = ("0" + this.fechaInicio.getDate()).slice(-2);
      var result = year + "-" + month + "-" + date;
      return result;
    }
    insertarPermiso() {
      var fechaI = this.changeFormat(this.fechaInicio);
      var fechaF = this.changeFormat(this.fechaFinal);
      this.listaAplicaciones.map((app) => {
        console.log({ fechaAsignacion: fechaI, fechaVencimiento: fechaF, nombre_app: app.NOM_APLICACION, nombre: this.user, rol: this.rol })
        this.service.asignarPermiso({ fechaAsignacion: fechaI, fechaVencimiento: fechaF, nombre_app: app.NOM_APLICACION, nombre: this.user, rol: this.rol }).then(Response => {
          if (Response.success) {
            console.log("Asigno permiso")
            console.log(app)
          } else {
            console.log(Response)
            console.log("error")
            console.log(app)
          }
        }).catch(e => {
          console.log(e)
        })
      })
  
    }
  }