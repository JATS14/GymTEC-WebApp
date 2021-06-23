import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarTratamientoS',
    templateUrl: './gestionarTratamiento.component.html',
    styleUrls: ['./gestionarTratamiento.component.css']
  })

  export class GestionarTratamiento{
    res1: Array<any> = [{"nombre":"Spa1","id_spa":"454545"}];
    res2: Array<any> = [];
    res3: Array<any> = [];
    res4: Array<any> = [];
    res5: Array<any> = [];

    SpaEditando: Array<any> = [];
    
    frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
          this.json.getJsonSpa().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }
      enviarAEditar(editar: any){
        this.SpaEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarSPAClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarSpaEditado: NgForm){
        if (EditarSpaEditado.valid) {
        this.json.postJsonSpaEditar(EditarSpaEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se edito el Servicio de tratamiento de Spa con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }


      goTo(AgrgarServicioSpa: NgForm) {
        if (AgrgarServicioSpa.valid) {
          this.json.postJsonSpaAgregar(AgrgarServicioSpa.value).subscribe((res: any) => {
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

      goToBuscar(BuscarSpa: NgForm) {
        if (BuscarSpa.valid) {
          this.json.postJsonSpaBuscar(BuscarSpa.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Servicio de Spa'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Tratamiento(object: any): void{
        this.json.postJsonSpaEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }

    }