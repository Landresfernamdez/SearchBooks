import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { User } from 'app/users/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Respuesta } from './response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  snackbar: MatSnackBar;
  constructor(private service:LoginService, private snackBar: MatSnackBar,private router:Router) {
    this.snackbar = snackBar;
   }
  ngOnInit() {

  }
  inicioSesion(){
    this.service.login(this.user).then((response:Respuesta)=>{
      if(response.success){
          if(this.user.rol=='C'){
              this.service.funcionario=true;
          }
          if(this.user.rol=='A'){
            this.service.administrador=true;
          }
          this.router.navigate(['/main']);
          this.notificar("Bienvenido " +this.user.nombreusuario, "exito");
      }
      else{
        this.notificar("Error, credenciales incorrectas", "error");
      }
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
