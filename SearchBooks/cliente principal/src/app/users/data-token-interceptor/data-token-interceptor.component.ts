import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookiesmanagementService } from '../cookies-management/cookiesmanagement.service';
@Injectable()
export class DataTokenInterceptor implements HttpInterceptor {
  token:any
  constructor(private cookies:CookiesmanagementService) {
    this.cookies.postCookie("token:12345")
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.cookies.getCookie("token")}`
      }
    });
    console.log("Cloned Request");   
    console.log(request);  
    return next.handle(request);
  }
}
