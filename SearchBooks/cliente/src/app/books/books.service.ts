import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
@Injectable()
export class BooksService {
  Url: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {
  }
  addBook(book) {
    console.log("Llego al servicio");
    console.log(book);
    return this.http.post(this.Url + 'agregarLibros', book).toPromise();
  }
  modifyBook(book) {
    console.log("Llego al servicio");
    console.log(book);
    return this.http.post(this.Url + 'modificarLibro', book).toPromise();
  }
  devuelveUltimo() {
    return this.http.get(this.Url + 'devuelveUltimo').toPromise();
  }
  devuelveTodoslibros() {
    return this.http.get(this.Url +'todosLibros');
  }
  deleteBook(temporal) {
    return this.http.post(this.Url + 'eliminarLibros', temporal).toPromise();
  }
}