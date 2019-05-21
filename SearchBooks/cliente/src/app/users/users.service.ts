import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
interface UserPostResponse {
  success: boolean,
  data:Object
}
@Injectable()
export class UsersService {
  Url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {
    
  }
  addUser(user) {
    return this.http.post(this.Url + 'agregarUsuarios', user).toPromise();
  }
  addDeparmentUser(userdeparment){
    return this.http.post(this.Url + 'agregarUsuarioDepartamento', userdeparment).toPromise();
  }
  modifyUser(temporal) {
    return this.http.post(this.Url + 'modificarUsuarios', temporal).toPromise();
  }
  deleteUser(temporal) {
    return this.http.post(this.Url + 'eliminarUsuarios', temporal).toPromise();
  }
  devuelveTodosUsuarios() {
    return this.http.get(this.Url + 'todosUsuarios');
  }
  devuelveTodosUsuariosRegistrados() {
    return this.http.get(this.Url + 'todosUsuariosR');
  }
  //Aplicaciones que un usuario no tiene permisos
  tienepermisosEncargado(usuario){
    return this.http.post<UserPostResponse>(this.Url + 'tienepermisosEncargado',usuario).toPromise();
  }
  asignarPermiso(usuario){
    return this.http.post<UserPostResponse>(this.Url + 'asignarPermiso',usuario).toPromise();
  }
  cambiarEstadoUsuario(usuario){
    return this.http.post<UserPostResponse>(this.Url + 'cambiarEstadoUsuario',usuario).toPromise();
  }

}