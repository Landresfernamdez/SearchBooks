import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { User } from 'app/users/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  constructor(private service:LoginService) {
    
   }
  ngOnInit() {

  }
  inicioSesion(){
    console.log(this.user);
  }

}
