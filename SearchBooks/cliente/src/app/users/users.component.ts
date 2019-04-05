import { Component,OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
import { UserD } from './userdeparment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users;
  user: User = new User();
  snackbar: MatSnackBar;
  constructor(private service: UsersService, private snackBar: MatSnackBar) {
    this.snackbar = snackBar;
    this.service.devuelveTodosUsuarios().subscribe(response => {
      this.users = response;
      console.log(this.users);
      for (var x = 0; x < this.users.length; x++) {
        this.users[x].clave = this.users[x].contraseña;
      }
    }
    )
  }
  ngOnInit() {
  }
  AgregaUsuario() {
    this.service.addUser(this.user).then(response => {
        this.users.push(this.user);
        var userdeparment=new UserD();
        userdeparment.cedula=this.user.cedula;
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
    this.service.modifyUser(this.user).then(response => {
        this.notificar("Se modifico con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  EliminaUser(){
    this.service.deleteUser(this.user).then(response => {
      console.log(response)
        for (var i =0;i<this.users.length; i++) {
          if (this.users[i].id === this.user.id) {
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
}
