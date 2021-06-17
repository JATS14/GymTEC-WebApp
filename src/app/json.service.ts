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

    /* GESTION Tipo Planilla*/ 
    urlObtnerTipoPlanilla = '';
    urlAgregarTipoPlanilla = '';
    urlBuscarTipoPlanilla = '';
    urlEliminarTipoPlanilla = '';
    urlEditarTipoPlanilla = '';

    /* GESTION Tipo Equipo*/ 
    urlObtnerTipoEquipo = '';
    urlAgregarTipoEquipo = '';
    urlBuscarTipoEquipo = '';
    urlEliminarTipoEquipo = '';
    urlEditarTipoEquipo = '';

    /* GESTION Sucursal*/ 
    urlObtnerSucursal = '';
    urlAgregarSucursal = '';
    urlBuscarSucursal = '';
    urlEliminarSucursal= '';
    urlEditarTSucursal = '';

    /* GESTION Servicio*/ 
    urlObtnerServicio = '';
    urlAgregarServicio = '';
    urlBuscarServicio= '';
    urlEliminarServicio= '';
    urlEditarServicio = '';

    /* GESTION Puesto*/ 
    urlObtnerPuesto = '';
    urlAgregarPuesto = '';
    urlBuscarPuesto= '';
    urlEliminarPuesto= '';
    urlEditarPuesto = '';


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

         /* GESTION Tipo Planilla*/ 
     getJsonTipoPlanilla(){
      return this.http.get(this.urlObtnerTipoPlanilla);
    }
     postJsonTipoPlanillaAgregar( obj: any){
      return this.http.post(this.urlAgregarTipoPlanilla, obj, this.httpOptions);
    }
    postJsonTipoPlanillaBuscar( obj: any){
      return this.http.post(this.urlBuscarTipoPlanilla, obj, this.httpOptions);
    }
    postJsonTipoPlanillaEliminar( obj: any){
      return this.http.post(this.urlEliminarTipoPlanilla, obj, this.httpOptions);
    }
    postJsonTipoPlanillaEditar( obj: any){
      return this.http.post(this.urlEditarTipoPlanilla, obj, this.httpOptions);
    }

    /* GESTION Tipo Equipo*/ 
    getJsonTipoEquipo(){
      return this.http.get(this.urlObtnerSucursal);
    }
     postJsonTipoEquipoAgregar( obj: any){
      return this.http.post(this.urlAgregarTipoEquipo, obj, this.httpOptions);
    }
    postJsonTipoEquipoBuscar( obj: any){
      return this.http.post(this.urlBuscarTipoEquipo, obj, this.httpOptions);
    }
    postJsonTipoEquipoEliminar( obj: any){
      return this.http.post(this.urlEliminarTipoEquipo, obj, this.httpOptions);
    }
    postJsonTipoEquipoEditar( obj: any){
      return this.http.post(this.urlEditarTipoEquipo, obj, this.httpOptions);
    }

    /* GESTION Sucursal*/ 
    getJsonSucursal(){
      return this.http.get(this.urlObtnerTipoEquipo);
    }
    postJsonSucursalAgregar( obj: any){
      return this.http.post(this.urlAgregarSucursal, obj, this.httpOptions);
    }
    postJsonSucursalBuscar( obj: any){
      return this.http.post(this.urlBuscarSucursal, obj, this.httpOptions);
    }
    postJsonSucursalEliminar( obj: any){
      return this.http.post(this.urlEliminarSucursal, obj, this.httpOptions);
    }
    postJsonSucursalEditar( obj: any){
      return this.http.post(this.urlEditarTSucursal, obj, this.httpOptions);
    }

    /* GESTION Servicio*/ 
    getJsonServicio(){
      return this.http.get(this.urlObtnerServicio);
    }
    postJsonServicioAgregar( obj: any){
      return this.http.post(this.urlAgregarServicio, obj, this.httpOptions);
    }
    postJsonServicioBuscar( obj: any){
      return this.http.post(this.urlBuscarServicio, obj, this.httpOptions);
    }
    postJsonServicioEliminar( obj: any){
      return this.http.post(this.urlEliminarServicio, obj, this.httpOptions);
    }
    postJsonServicioEditar( obj: any){
      return this.http.post(this.urlEditarServicio, obj, this.httpOptions);
    }

    /* GESTION Puesto*/ 
    getJsonPuesto(){
      return this.http.get(this.urlObtnerPuesto);
    }
    postJsonPuestoAgregar( obj: any){
      return this.http.post(this.urlAgregarPuesto, obj, this.httpOptions);
    }
    postJsonPuestoBuscar( obj: any){
      return this.http.post(this.urlBuscarPuesto, obj, this.httpOptions);
    }
    postJsonPuestoEliminar( obj: any){
      return this.http.post(this.urlEliminarPuesto, obj, this.httpOptions);
    }
    postJsonPuestoEditar( obj: any){
      return this.http.post(this.urlEditarPuesto, obj, this.httpOptions);
    }



}