import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class UsersService {
  Url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient,private snackBar: MatSnackBar) {
  }
  addUser(user) {
    return this.http.post(this.Url + 'agregarUsuarios', user).toPromise()
    /*.then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    });*/
  }
  modifyUser(temporal) {
      console.log(temporal);
    return this.http.post(this.Url + 'modificarUsuarios', temporal).toPromise();
  }
  devuelveTodosUsuarios() {
    return this.http.get(this.Url +'todosUsuarios');
  }
  
}