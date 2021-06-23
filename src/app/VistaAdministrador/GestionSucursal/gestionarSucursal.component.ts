import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarSucursal',
    templateUrl: './gestionarSucursal.component.html',
    styleUrls: ['./gestionarSucursal.component.css']
  })

  export class GestionarSucursal{

    res1: Array<any> = [{"nombre":"Sucursal1","direccion":"Cartago-Cartago-Guadalupe",
                            "fechaApertura":"10-500-2010","horarioAtencion":"6-18",
                            "empleadoAdmin":"JuanitoMora","capacidadMax":50,"numTelefono":85125548,
                            "spa":"on","tienda":"off"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
      res6: Array<any> = [];
      res7: Array<any> = [];
  
      SucursalEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

      SucursalCopiado: Array<any> = [];
    
      frameCopiarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
         this.json.getJsonSucursal().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }

      enviarAEditar(editar: any){
        this.SucursalEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarSucursalClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarSucursalEditado: NgForm){
        if (EditarSucursalEditado.valid) {
        this.json.postJsonSucursalEditar(EditarSucursalEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó Sucursal con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarSucursal: NgForm) {
        if (AgrgarSucursal.valid) {
          this.json.postJsonSucursalAgregar(AgrgarSucursal.value).subscribe((res: any) => {
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

      goToBuscar(BuscarSucursal: NgForm) {
        if (BuscarSucursal.valid) {
          this.json.postJsonSucursalBuscar(BuscarSucursal.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Sucursal'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Sucursal(object: any): void{
        this.json.postJsonSucursalEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }

      ActivarSpa(object: any): void{
        this.json.postJsonSucursalONOFFSpa(object).subscribe((resX: any) => {
          console.log(resX);
          this.res6 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }
      ActivarTienda(object: any): void{
        this.json.postJsonSucursalONOFFTienda(object).subscribe((resX: any) => {
          console.log(resX);
          this.res7 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      }

      enviarAECopiar(editar: any){
        this.SucursalCopiado = [editar];
        this.frameCopiarAbrir = true;
      }
  
      CopiarSucursalClose(estado : boolean){
        this.frameCopiarAbrir = estado;
      }

      goToCopiar(CopiarSucursal: NgForm){
        if (CopiarSucursal.valid) {
        this.json.postJsonSucursalAgregar(CopiarSucursal.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "agregado"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se Copió Sucursal con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

    }