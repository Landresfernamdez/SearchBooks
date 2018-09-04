import { HttpHeaders } from '@angular/common/http';
import {Book} from './Book';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BooksService{
    Url:string='http://localhost:8080/';
    constructor(private http:HttpClient){
    }
    addBook(book:Book) {
        return this.http.post(this.Url+'agregarLibros',book);
      }
    devuelveUltimo(){
        return this.http.get(`http://localhost:8080/devuelveUltimo`).toPromise();
    }
    }