import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BooksService{
    Url:string='http://localhost:8080/';
    constructor(private http:HttpClient){
    }
    addBook(book) {
      console.log("Llego al servicio");
        console.log(book);
        return this.http.post(this.Url+'agregarLibros',book);
      }
    devuelveUltimo(){
        return this.http.get(`http://localhost:8080/devuelveUltimo`).toPromise();
    }
    }