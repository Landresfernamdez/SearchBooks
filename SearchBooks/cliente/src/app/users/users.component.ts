import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users;
	user: User = new User();
  constructor(private service: UsersService) {
    this.service.devuelveTodosUsuarios().subscribe(response =>{
      this.users = response;
      for(var x=0;x<this.users.length; x++){
          this.users[x].clave=this.users[x].contraseña;
          console.log(this.users[x]);
      }
    }
      )
  }

  ngOnInit() {
  }
  AgregaUsuario() {
		 this.service.addUser(this.user);
	}
  ModificaUser(temporal) {
		this.user=temporal;
  }
  ModificarUsuario() {
		this.service.modifyUser(this.user);
	}
}
