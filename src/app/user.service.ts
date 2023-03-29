import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userprofile } from './model/usermodel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private _http:HttpClient) { }
  getData(userId:any): Observable<any> {
    return this._http.get('https://sheik-blog.onrender.com/api/user/get?userId='+userId);
  }
updateData(payload: any) :Observable<any>{
  return this._http.put('https://sheik-blog.onrender.com/api/user/update', payload) ;
}

signup(signupPayload:any): Observable<any>{
  return this._http.post('https://sheik-blog.onrender.com/api/user/add',signupPayload);
}
getallData(): Observable <any>{
  return this._http.get('https://sheik-blog.onrender.com/api/user/getall');

}



}
