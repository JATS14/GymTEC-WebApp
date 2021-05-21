import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService{

    url1 = '';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };
      
      constructor(private http: HttpClient) { }

      getJsonEjemplo(){
        return this.http.get(this.url1);
      }

      postJsonEjemplo( obj: any){
        return this.http.post(this.url1, obj, this.httpOptions);
      }


}