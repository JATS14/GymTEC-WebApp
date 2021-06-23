import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonService{

    urlLogin = 'https://localhost:5001/LogInRegister/verificar';
    urlRegistro = 'https://localhost:5001/LogInRegister/registrar';

    urlUsuarioActualGET= 'https://localhost:5001/GetListas/GetUsuarioActual';

    urlRolActualGET = 'https://localhost:5001/GetListas/GetAdminActual';

    /* GESTION TRATAMIENTO SPA*/ 
    urlObtnerSpas = 'https://localhost:5001/GetListas/GetSpa';
    urlAgregarSpa = 'https://localhost:5001/TratamientoSpa/agregarSpa';
    urlBuscarSpa = 'https://localhost:5001/TratamientoSpa/buscarSpa';
    urlEliminarSpa = 'https://localhost:5001/TratamientoSpa/eliminarSpa';
    urlEditarSpa = 'https://localhost:5001/TratamientoSpa/editarSpa';

    /* GESTION Tipo Planilla*/ 
    urlObtnerTipoPlanilla = 'https://localhost:5001/GetListas/GetTipoPlanilla';
    urlAgregarTipoPlanilla = 'https://localhost:5001/TipoPlanilla/agregarTipoPlanilla';
    urlBuscarTipoPlanilla = 'https://localhost:5001/TipoPlanilla/buscarTipoPlanilla';
    urlEliminarTipoPlanilla = 'https://localhost:5001/TipoPlanilla/eliminarTipoPlanilla';
    urlEditarTipoPlanilla = 'https://localhost:5001/TipoPlanilla/editarTipoPlanilla';

    /* GESTION Tipo Equipo*/ 
    urlObtnerTipoEquipo = 'https://localhost:5001/GetListas/GetTipoEquipo';
    urlAgregarTipoEquipo = 'https://localhost:5001/TipoEquipo/agregarTipoDeEquipo';
    urlBuscarTipoEquipo = 'https://localhost:5001/TipoEquipo/buscarTipoDeEquipo';
    urlEliminarTipoEquipo = 'https://localhost:5001/TipoEquipo/eliminarTipoDeEquipo';
    urlEditarTipoEquipo = 'https://localhost:5001/TipoEquipo/editarTipoDeEquipo';

    /* GESTION Sucursal*/ 
    urlObtnerSucursal = 'https://localhost:5001/GetListas/GetSucursal';
    urlAgregarSucursal = 'https://localhost:5001/Sucursal/agregarSucursal';
    urlBuscarSucursal = 'https://localhost:5001/Sucursal/buscarSucursal';
    urlEliminarSucursal = 'https://localhost:5001/Sucursal/eliminarSucursal';
    urlEditarTSucursal = 'https://localhost:5001/Sucursal/editarSucursal';
    urlONOFFSPASucursal = 'https://localhost:5001/Sucursal/ONOFFSPA';
    urlONOFFTiendaSucursal = 'https://localhost:5001/Sucursal/ONOFFTIENDA';
    //urlCopiarSucursal = '';

    /* GESTION Servicio*/ 
    urlObtnerServicio = 'https://localhost:5001/GetListas/GetServicio';
    urlAgregarServicio = 'https://localhost:5001/Servicio/agregarServicio';
    urlBuscarServicio = 'https://localhost:5001/Servicio/buscarServicio';
    urlEliminarServicio= 'https://localhost:5001/Servicio/eliminarServicio';
    urlEditarServicio = 'https://localhost:5001/Servicio/editarServicio';

    /* GESTION Puesto*/ 
    urlObtnerPuesto = 'https://localhost:5001/GetListas/GetPuesto';
    urlAgregarPuesto = 'https://localhost:5001/Puesto/agregarPuesto';
    urlBuscarPuesto = 'https://localhost:5001/Puesto/buscarPuesto';
    urlEliminarPuesto= 'https://localhost:5001/Puesto/eliminarPuesto';
    urlEditarPuesto = 'https://localhost:5001/Puesto/editarPuesto';

    /* GESTION Producto*/ 
    urlObtnerProducto = 'https://localhost:5001/GetListas/GetProductos';
    urlAgregarProducto = 'https://localhost:5001/Producto/agregarProducto';
    urlBuscarProducto = 'https://localhost:5001/Producto/buscarProducto';
    urlEliminarProducto = 'https://localhost:5001/Producto/eliminarProducto';
    urlEditarProducto = 'https://localhost:5001/Producto/editarProducto';

     /* GESTION Inventario*/ 
     urlObtnerInventario = 'https://localhost:5001/GetListas/GetInventario';
     urlAgregarInventario = 'https://localhost:5001/Inventario/agregarInventario';
     urlBuscarInventario = 'https://localhost:5001/Inventario/buscarInventario';
     urlEliminarInventario = 'https://localhost:5001/Inventario/eliminarInventario';
     urlEditarInventario = 'https://localhost:5001/Inventario/editarInventario';

      /* GESTION Empleado*/ 
      urlObtnerEmpleado = 'https://localhost:5001/GetListas/GetEmpleados';
      urlAgregarEmpleado = 'https://localhost:5001/Empleado/agregarEmpleado';
      urlBuscarEmpleado= 'https://localhost:5001/Empleado/buscarEmpleado';
      urlEliminarEmpleado = 'https://localhost:5001/Empleado/eliminarEmpleado';
      urlEditarEmpleado = 'https://localhost:5001/Empleado/editarEmpleado';

       /* Generar Planilla*/ 
      urlGetPlanillaMensual = 'https://localhost:5001/GenerarPlanilla/generarPlanillaMensual';
      urlGetPlanillaHoras = 'https://localhost:5001/GenerarPlanilla/generarPlanillaHoras';
      urlGetPlanillaClase = 'https://localhost:5001/GenerarPlanilla/generarPlanillaClases';

      /* Configurar Gimnasio*/ 
      UrlObtenerSucursalActual = 'https://localhost:5001/GetListas/GetSucursalActual';
      UrlObtenerClases = 'https://localhost:5001/GetListas/GetClases';
      UrlEliminarClases = 'https://localhost:5001/ConfiguracionGym/eliminarClases';
      //UrlCopiarClases = '';
      UrlAgregarClases = 'https://localhost:5001/ConfiguracionGym/agregarClases';
      
      UrlAsociarSpa = 'https://localhost:5001/ConfiguracionGym/AsociarSpa';
      UrlDesasociarSpa = 'https://localhost:5001/ConfiguracionGym/DesasociarSpa';

      UrlAsociarProducto = 'https://localhost:5001/ConfiguracionGym/AsociarProducto';
      UrlDesasociarProducto = 'https://localhost:5001/ConfiguracionGym/DesasociarProducto';

      UrlAsociarInventario = 'https://localhost:5001/ConfiguracionGym/AsociarInventario';
      UrlDesasociarInventario = 'https://localhost:5001/ConfiguracionGym/DesasociarInventario';

      UrlAsociarServicio = 'https://localhost:5001/ConfiguracionGym/AsociarServicio';
      UrlDesasociarServicio = 'https://localhost:5001/ConfiguracionGym/DesasociarServicio';

       /* Vista Usuario */ 
       
       urlRegistrarseClase = 'https://localhost:5001/VistaCliente/registrarseClases';
       urlBuscarClaseUsuario = 'https://localhost:5001/ConfiguracionGym/buscarClases';

       /* spa inventario servicio producto actual*/

       urlSpaActual = 'https://localhost:5001/GetListas/GetSpaActual';
       urlinventarioActual = 'https://localhost:5001/GetListas/GetInventarioActual';
       urlproductoActual = 'https://localhost:5001/GetListas/GetProductosActual';
       urlservicioActual = 'https://localhost:5001/GetListas/GetServicioActual';

    //header = {headers: {'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type, Authorization'}};
    
   /* httpOptions = {
      headers: new HttpHeaders ({
        'Access-Control-Allow-Origin': 'http://localhost:5001/', 
        'Access-Control-Allow-Methods': 'POST', 
        'Access-Control-Allow-Headers': 'Content-Type' , 
        Authorization: 'my-auth-token'
      })
    }; */

    httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200/',
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

    getJsonRolActual(){
      return this.http.get(this.urlRolActualGET);
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
      return this.http.get(this.urlObtnerTipoEquipo);
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
      return this.http.get(this.urlObtnerSucursal);
      
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
    postJsonSucursalONOFFSpa( obj: any){
      return this.http.post(this.urlONOFFSPASucursal, obj, this.httpOptions);
    }
    postJsonSucursalONOFFTienda(obj: any){
      return this.http.post(this.urlONOFFTiendaSucursal, obj, this.httpOptions);
    }
    //postJsonSucursaCopiar(obj: any){
    //  return this.http.post(this.urlCopiarSucursal, obj, this.httpOptions);
    //}

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

    /* GESTION Producto*/ 
    getJsonProducto(){
      return this.http.get(this.urlObtnerProducto);
    }
    postJsonProductoAgregar( obj: any){
      return this.http.post(this.urlAgregarProducto, obj, this.httpOptions);
    }
    postJsonProductoBuscar( obj: any){
      return this.http.post(this.urlBuscarProducto, obj, this.httpOptions);
    }
    postJsonProductoEliminar( obj: any){
      return this.http.post(this.urlEliminarProducto, obj, this.httpOptions);
    }
    postJsonProductoEditar( obj: any){
      return this.http.post(this.urlEditarProducto, obj, this.httpOptions);
    }

    /* GESTION Inventario*/ 
    getJsonInventario(){
      return this.http.get(this.urlObtnerInventario);
    }
    postJsonInventarioAgregar( obj: any){
      return this.http.post(this.urlAgregarInventario, obj, this.httpOptions);
    }
    postJsonInventarioBuscar( obj: any){
      return this.http.post(this.urlBuscarInventario, obj, this.httpOptions);
    }
    postJsonInventarioEliminar( obj: any){
      return this.http.post(this.urlEliminarInventario, obj, this.httpOptions);
    }
    postJsonInventarioEditar( obj: any){
      return this.http.post(this.urlEditarInventario, obj, this.httpOptions);
    }

     /* GESTION Empleado*/ 
     getJsonEmpleado(){
      return this.http.get(this.urlObtnerEmpleado);
    }
    postJsonEmpleadoAgregar( obj: any){
      return this.http.post(this.urlAgregarEmpleado, obj, this.httpOptions);
    }
    postJsonEmpleadoBuscar( obj: any){
      return this.http.post(this.urlBuscarEmpleado, obj, this.httpOptions);
    }
    postJsonEmpleadoEliminar( obj: any){
      return this.http.post(this.urlEliminarEmpleado, obj, this.httpOptions);
    }
    postJsonEmpleadoEditar( obj: any){
      return this.http.post(this.urlEditarEmpleado, obj, this.httpOptions);
    }

    /* Generar Planilla*/ 
    postJsonPlanillaMensual( obj: any){
      return this.http.post(this.urlGetPlanillaMensual, obj, this.httpOptions);
    }
    postJsonPlanillaHoras( obj: any){
      return this.http.post(this.urlGetPlanillaHoras, obj, this.httpOptions);
    }
    postJsonPlanillaClase( obj: any){
      return this.http.post(this.urlGetPlanillaClase, obj, this.httpOptions);
    }

    /* Configurar Gimnasio*/ 
    getJsonSucursalActual(){
      return this.http.get(this.UrlObtenerSucursalActual);
    }
    getJsonClases(){
      return this.http.get(this.UrlObtenerClases);
    }
    postJsonEliminarClase( obj: any){
      return this.http.post(this.UrlEliminarClases, obj, this.httpOptions);
    }
    //postJsonCopiarClase( obj: any){
    //  return this.http.post(this.UrlCopiarClases, obj, this.httpOptions);
    //}
    postJsonAgregarClase( obj: any){
      return this.http.post(this.UrlAgregarClases, obj, this.httpOptions);
    }

    postJsonAsociarSpa( obj: any){
      return this.http.post(this.UrlAsociarSpa, obj, this.httpOptions);
    }
    postJsonDesasociarSpa( obj: any){
      return this.http.post(this.UrlDesasociarSpa, obj, this.httpOptions);
    }

    postJsonAsociarProducto( obj: any){
      return this.http.post(this.UrlAsociarProducto, obj, this.httpOptions);
    }
    postJsonDesasociarProducto( obj: any){
      return this.http.post(this.UrlDesasociarProducto, obj, this.httpOptions);
    }

    postJsonAsociarInventario( obj: any){
      return this.http.post(this.UrlAsociarInventario, obj, this.httpOptions);
    }
    postJsonDesasociarInventario( obj: any){
      return this.http.post(this.UrlDesasociarInventario, obj, this.httpOptions);
    }

    postJsonAsociarServicio( obj: any){
      return this.http.post(this.UrlAsociarServicio, obj, this.httpOptions);
    }
    postJsonDesasociarServicio( obj: any){
      return this.http.post(this.UrlDesasociarServicio, obj, this.httpOptions);
    }

     /* Vista Usuario */ 

     postJsonRegistroClase( obj: any){
      return this.http.post(this.urlRegistrarseClase, obj, this.httpOptions);
    }
    postJsonBuscarClaseUsuario( obj: any){
      return this.http.post(this.urlBuscarClaseUsuario, obj, this.httpOptions);
    }

    /* spa inventario servicio producto actual*/
    getJsonspaActual(){
      return this.http.get(this.urlSpaActual);
    }
    getJsoninventarioActual(){
      return this.http.get(this.urlinventarioActual);
    }
    getJsonproductoActual(){
      return this.http.get(this.urlproductoActual);
    }
    getJsonservicioActual(){
      return this.http.get(this.urlservicioActual);
    }
};