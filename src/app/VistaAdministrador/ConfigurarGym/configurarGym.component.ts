import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-configurarGym',
    templateUrl: './configurarGym.component.html',
    styleUrls: ['./configurarGym.component.css']
  })

  export class ConfigurarGym{
    res2: Array<any> = [];
    res3: Array<any> = [];
    res4: Array<any> = [];
    dummy:Array<any> = [];
    ClaseCopiado: Array<any> = [];
    frameCopiarAbrir : boolean = false;

    SucursalActual: Array<any> = [{"nombre": "prueba1"}];

    TratamientoActual:  Array<any> = [{"nombre":"Spa1Aso","identificador":"454545"}];
    ListaTratamientos: Array<any> = [{"nombre":"NoSpa1","identificador":"454545"},
                                      {"nombre":"NoSpa2","identificador":"454545"},
                                      {"nombre":"NoSpa3","identificador":"454545"}];

    ProductosActual:Array<any> = [{ "nombre":"Asociada","codigoBarras":58487855,
                                  "descripcion":"Descripcion producto 1","costo":1000}];                                
    ListaProductos: Array<any> = [{"nombre":"Prodcuto1","codigoBarras":58487855,
                                  "descripcion":"Descripcion producto 1","costo":1000},
                                  {"nombre":"Prodcuto2","codigoBarras":58487855,
                                  "descripcion":"Descripcion producto 1","costo":1000}];
   
    InventarioActual: Array<any> = [{"tipoEquipo":"AsociInvent","marca":"Marca1","numeroSerie":125545,
                                      "costo":154520,"sucursal":"Sucursal1"}];
    ListaInventario: Array<any> = [{"tipoEquipo":"tipoequipo1","marca":"Marca1","numeroSerie":125545 ,
                                     "costo":154520,"sucursal":"Sucursal1"},
                                   {"tipoEquipo":"tipoequipo2","marca":"Marca1","numeroSerie":125545 ,
                                     "costo":154520,"sucursal":"Sucursal1"}];

    ServicioActual: Array<any> = [{"identificador":"Sucursalaso1","descripcion":"Descripcion 1"},
                                  {"identificador":"Sucursalaso2","descripcion":"Descripcion 1"}];
    ListaServicios: Array<any> = [{"identificador":"Sucursal1","descripcion":"Descripcion 1"},
                                  {"identificador":"Sucursal2","descripcion":"Descripcion 1"},
                                  {"identificador":"Sucursal3","descripcion":"Descripcion 1"}];


    ListaClases: Array<any> = [{"idClase":"12313","tipo":"Tipo1","instructor":"NombreInst","individual":1,"capacidad":50,
                                  "fecha":"06-18-2021","horaInicio":"18:52","horaFin":"19:50"}];

    constructor(
        private router: Router, public json: JsonService) {
          /* this.json.getJsonSucursalActual().subscribe((res: any) => {
            console.log(res);
            this.SucursalActual = res;
          });
          this.json.getJsonSpa().subscribe((res: any) => {
            console.log(res);
            this.ListaTratamientos = res;
          });
          this.json.getJsonProducto().subscribe((res: any) => {
            console.log(res);
            this.ListaProductos = res;
          });
          this.json.getJsonInventario().subscribe((res: any) => {
            console.log(res);
            this.ListaInventario = res;
          });
          this.json.getJsonServicio().subscribe((res: any) => {
            console.log(res);
            this.ListaServicios = res;
          });
          this.json.getJsonClases().subscribe((res: any) => {
            console.log(res);
            this.ListaClases = res;
          });
          */
      }

      
      Eliminar_Clase(object: any): void{
        this.json.postJsonSucursalEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }

      goTo(AgrgarClase: NgForm) {
        if (AgrgarClase.valid) {
          this.json.postJsonSucursalAgregar(AgrgarClase.value).subscribe((res: any) => {
            console.log(res);
            this.res3 = res; 
            if(res.status == "agregado"){
              window.location.reload();
            }
          }); 
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      enviarCopiarClase(editar: any){
        this.ClaseCopiado = [editar];
        this.frameCopiarAbrir = true;
      }
  
      CopiarClaseClose(estado : boolean){
        this.frameCopiarAbrir = estado;
      }

      goToCopiar(CopiarClase: NgForm){
        if (CopiarClase.valid) {
        this.json.postJsonSucursalAgregar(CopiarClase.value).subscribe((resy: any) => {
          console.log(resy);
          this.res4 = resy;
          if(resy.status == "exito"){
            this.frameCopiarAbrir = false;
            window.location.reload();
            alert('Se Copio Clase con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      AsocicarSpa(object: any): void{
        this.json.postJsonAsociarSpa(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }
      DesasocicarSpa(object: any): void{
        this.json.postJsonDesasociarSpa(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }

      AsocicarProducto(object: any): void{
        this.json.postJsonAsociarProducto(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }
      DesasocicarProducto(object: any): void{
        this.json.postJsonDesasociarProducto(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }

      AsocicarInventario(object: any): void{
        this.json.postJsonAsociarInventario(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }
      DesasocicarInventario(object: any): void{
        this.json.postJsonDesasociarInventario(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }

      AsocicarServicio(object: any): void{
        this.json.postJsonAsociarServicio(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }
      DesasocicarServicio(object: any): void{
        this.json.postJsonDesasociarServicio(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }


    }