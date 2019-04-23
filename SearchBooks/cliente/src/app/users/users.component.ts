import { Component,OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
import { UserD } from './userdeparment';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersfc = new FormControl();
  public users;
  user: User = new User();
  snackbar: MatSnackBar;
  constructor(private service: UsersService, private snackBar: MatSnackBar,public dialog: MatDialog) {
    this.snackbar = snackBar;
    this.service.devuelveTodosUsuarios().subscribe(response => {
      this.users = response;
      console.log(this.users);
      for (var x = 0; x < this.users.length; x++) {
        this.users[x].pass = this.users[x].pass;
      }
    }
    )
  }
  ngOnInit() {
  }
  AgregaUsuario() {
    this.user.listaRoles=this.user.rol;
    console.log(this.user)
    this.service.addUser(this.user).then(response => {
        this.users.push(this.user);
        var userdeparment=new UserD();
        userdeparment.cedula=this.user.IDPer;
        userdeparment.iddepartamento="110";
        console.log(response)

        this.service.addDeparmentUser(userdeparment).then(response=>{
            this.notificar("Se agrego con exito", "exito");
        }).catch(error => {
            this.notificar("Error, mala conexión", "error");
        });
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  ModificaUser(temporal){
    this.user = temporal;
  }
  ModificarUsuario() {
    this.user.listaRoles=this.user.rol;
    this.service.modifyUser(this.user).then(response => {
        this.notificar("Se modifico con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  EliminaUser(){
    console.log("Prueba:",this.user)
    this.service.deleteUser(this.user).then(response => {
        for (var i =0;i<this.users.length; i++) {
          if (this.users[i].idPersona == this.user.IDPer) {
            this.users.splice(i,1);
          }
        }
        this.notificar("Se elimino con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  notificar(messaje,action){
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
  public roles;
  public aplicaciones;//Lista de aplicaciones de las que el usuario no tiene permisos aun
  user: User = new User();
  snackbar: MatSnackBar;
  constructor(private service: UsersService, private snackBar: MatSnackBar,public dialog: MatDialog) {
    this.snackbar = snackBar;
    this.roles=["Encargado","Administrador"]
    this.service.devuelveTodosUsuarios().subscribe(response => {
      this.users = response;
      console.log(this.users);
      for (var x = 0; x < this.users.length; x++) {
        this.users[x].pass = this.users[x].pass;
      }
    }
    )
    this.service.devuelveAplicacionesQusuarionotienepermiso({nombre:"Andres Fernández"}).then(
			response => {
        console.log(response)
				this.aplicaciones=response
			}
		).catch(error => {
			
		});
  }


}