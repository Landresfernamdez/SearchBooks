import { Component,OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
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
        this.notificar("Se agrego con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  ModificaUser(temporal) {
    this.user = temporal;
  }
  ModificarUsuario() {
    this.service.modifyUser(this.user).then(response => {
        this.notificar("Se modifico con exito", "exito");
    }).catch(error => {
      this.notificar("Error, mala conexión", "error");
    });
  }
  EliminaUser(user){
    this.service.deleteUser(user).then(response => {
        for (var i = this.users.length - 1; i--;) {
          if (this.users[i].id === user.id) {
            this.users.splice(i, 1);
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
