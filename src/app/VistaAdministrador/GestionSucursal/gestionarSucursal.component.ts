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
                            "fechaApertura":"10-500-2010","horaAtencion":"6-18",
                            "administrador":"JuanitoMora","capacidadMaxima":50,"telefono":85125548}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      SucursalEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
        /* this.json.getJsonSucursal().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/
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

    }