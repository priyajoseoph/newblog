import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
public url='';
  constructor(private _http:HttpClient) { }
  getallData(): Observable<any> {
    return this._http.get('https://sheik-blog.onrender.com/api/blog/getall');
  }
  postData(payload: any): Observable<any> {
    return this._http.post('https://sheik-blog.onrender.com/api/blog/add', payload);

  }
updateData(payload: any) :Observable<any>{
  return this._http.put('https://sheik-blog.onrender.com/api/blog/update' , payload) ;
}
onDelete(blogId:any):Observable<any>{
  return this._http.delete('https://sheik-blog.onrender.com/api/blog/delete?blogId='+blogId);

}
getData(blogId:number):Observable<any>{
  return this._http.get('https://sheik-blog.onrender.com/api/blog/get?blogId='+blogId)
}
}

