import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private _http:HttpClient) { }
  getcmdData(blogId:any): Observable<any> {
    return this._http.get('https://sheik-blog.onrender.com/api/user/get?commentId='+blogId);
  }
updatecmdData(payload: any) :Observable<any>{
  return this._http.put('https://sheik-blog.onrender.com/api/comment/update', payload) ;
}

addcmdData(payload:any): Observable<any>{
  return this._http.post('https://sheik-blog.onrender.com/api/comment/add',payload);
}
getallcmdData(blogId): Observable <any>{
  return this._http.get('https://sheik-blog.onrender.com/api/comment/get?commentId='+blogId);

}
deletecmdData() :Observable<any>{
  return this._http.delete('https://sheik-blog.onrender.com/api/comment/delete?commentId=1') ;
}


}
