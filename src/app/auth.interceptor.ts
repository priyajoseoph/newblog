import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public authReq: any;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authReq = request.clone({
      // headers: new HttpHeaders({
      //   'Access-Control-Allow-Origin' : '*',
      //   'Access-Control-Allow-Methods': '*'
       
      // }),
    });
    
    return next.handle(this.authReq);
  }
}
