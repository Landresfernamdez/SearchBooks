import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
import { UserD } from './userdeparment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ResponseOptions } from '@angular/http';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tiles = [
    {app: 'Cubiculos', icon:"https://image.shutterstock.com/image-vector/partition-wall-divide-space-equipment-260nw-1061242031.jpg"},
    {app: 'Libros', icon:"data:image/png;base64,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"},
    {app: 'Estadisticas', icon:"https://image.flaticon.com/icons/png/512/200/200714.png"},
    {app: 'Actividades', icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbj663uTHLENbyJ7fP2du8mJ20_xLchKlpTLMQEcHUQW0rfHeDw"},
  ];
  usersfc = new FormControl();
  public users;
  user: User = new User();
  snackbar: MatSnackBar;
  constructor(private service: UsersService, private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.snackbar = snackBar;
    /*this.service.devuelveTodosUsuarios().subscribe(response => {
      this.users = response;
      console.log(this.users);
      for (var x = 0; x < this.users.length; x++) {
        this.users[x].pass = this.users[x].pass;
      }
    }
    )*/
    this.service.devuelveTodosUsuariosRegistrados().subscribe(response => {
      console.log(response)
      this.users = response
    }
    )
  }
  ngOnInit() {
  }
  showOptions(user) {
    var estado;
    if(user.ESTADO){
      estado="1";
    }else{
      estado="0";
    }
    this.service.cambiarEstadoUsuario({ id_encargado: user.ID_ENCARGADO, estado: estado}).then(Response => {
      if (Response.success) {
        if(estado=="1"){
          this.notificar("Se activo el usuario con exito", "exito");
        }else{
          this.notificar("Se inactivo el usuario con exito", "exito");
        }
      } else {
        console.log(Response)
        this.notificar("Error, mala conexión", "error");
      }
    }).catch(e => {
      console.log(e)
    })
  }
  AgregaUsuario() {
    this.user.listaRoles = this.user.rol;
    this.service.addUser(this.user).then(response => {
      this.users.push(this.user);
      var userdeparment = new UserD();
      userdeparment.cedula = this.user.IDPer;
      userdeparment.iddepartamento = "110";
      this.service.addDeparmentUser(userdeparment).then(response => {
        this.notificar("Se agrego con exito", "exito");
      }).catch(error => {
        this.notificar("Error, mala conexión", "error");
      });
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  ModificaUser(temporal) {
    this.user = temporal;
  }
  ModificarUsuario() {
    this.user.listaRoles = this.user.rol;
    this.service.modifyUser(this.user).then(response => {
      this.notificar("Se modifico con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  EliminaUser() {
    this.service.deleteUser(this.user).then(response => {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].idPersona == this.user.IDPer) {
          this.users.splice(i, 1);
        }
      }
      this.notificar("Se elimino con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  notificar(messaje, action) {
    this.snackbar.open(messaje, action, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
  openDialogPermisos() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
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