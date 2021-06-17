import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService{

    urlLogin = '';
    urlRegistro = '';

    urlUsuarioActualGET= '';
    urlUsuarioActualSET= '';

    /* GESTION TRATAMIENTO SPA*/ 
    urlObtnerSpas = '';
    urlAgregarSpa = '';
    urlBuscarSpa = '';
    urlEliminarSpa = '';
    urlEditarSpa = '';


    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };
      
      constructor(private http: HttpClient) { }

      /*Login - register*/
  postJson( obj: any){
    return this.http.post(this.urlLogin, obj, this.httpOptions);
  }
  postJsonRegister( obj: any){
    return this.http.post(this.urlRegistro, obj, this.httpOptions);
  }
     /*UsuarioActual*/ 
     getJsonUsuarioActual(){
      return this.http.get(this.urlUsuarioActualGET);
    }
  
    postJsonUsuarioActual( obj: any){
      return this.http.post(this.urlUsuarioActualSET, obj, this.httpOptions);
    }


     /* GESTION TRATAMIENTO SPA*/ 
     getJsonSpa(){
      return this.http.get(this.urlObtnerSpas);
    }
     postJsonSpaAgregar( obj: any){
      return this.http.post(this.urlAgregarSpa, obj, this.httpOptions);
    }
    postJsonSpaBuscar( obj: any){
      return this.http.post(this.urlBuscarSpa, obj, this.httpOptions);
    }
    postJsonSpaEliminar( obj: any){
      return this.http.post(this.urlEliminarSpa, obj, this.httpOptions);
    }
    postJsonSpaEditar( obj: any){
      return this.http.post(this.urlEditarSpa, obj, this.httpOptions);
    }


}