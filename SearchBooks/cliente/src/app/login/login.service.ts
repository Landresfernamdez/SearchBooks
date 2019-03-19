import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
@Injectable()
export class LoginService {
  Url: string = 'http://localhost:8080/';
  funcionario:boolean=false;
  administrador:boolean=false;
  constructor(private http: HttpClient) {

  }

  getStateLogin(){
    if(this.administrador==false && this.funcionario==false){
        return false
    }else{
      return true;
    }
  }
  login(user){
      return this.http.post(this.Url + 'iniciarSesion', user).toPromise();
  }
}