import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(payload:any): Observable<any> {
    return this.http.post('https://sheik-blog.onrender.com/api/auth/login', payload);
  }


}


