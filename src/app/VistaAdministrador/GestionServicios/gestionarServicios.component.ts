import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarServicios',
    templateUrl: './gestionarServicios.component.html',
    styleUrls: ['./gestionarServicios.component.css']
  })

  export class GestionarServicios{
    res1: Array<any> = [{"identificador":"Sucursal1","descripcion":"Descripcion 1"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      ServicioEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;
    constructor(
        private router: Router, public json: JsonService) {
        /* this.json.getJsonServicio().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/
      }

      enviarAEditar(editar: any){
        this.ServicioEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarServicioClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarServicioEditado: NgForm){
        if (EditarServicioEditado.valid) {
        this.json.postJsonServicioEditar(EditarServicioEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó el Servicio con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarServicio: NgForm) {
        if (AgrgarServicio.valid) {
          this.json.postJsonServicioAgregar(AgrgarServicio.value).subscribe((res: any) => {
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

      goToBuscar(BuscarServicio: NgForm) {
        if (BuscarServicio.valid) {
          this.json.postJsonServicioBuscar(BuscarServicio.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Servicio'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Servicio(object: any): void{
        this.json.postJsonServicioEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }



    }