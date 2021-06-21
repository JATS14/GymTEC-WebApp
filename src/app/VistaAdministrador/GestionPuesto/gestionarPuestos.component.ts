import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarPuestos',
    templateUrl: './gestionarPuestos.component.html',
    styleUrls: ['./gestionarPuestos.component.css']
  })

  export class GestionarPuestos{
    
     res1: Array<any> = [{"id_puesto":"Puesto 1","descripcion":"descripcion pyuesto 1"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      PuestoEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
        /* this.json.getJsonPuesto().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/
      }

      enviarAEditar(editar: any){
        this.PuestoEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarPuestoClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarPuestoEditado: NgForm){
        if (EditarPuestoEditado.valid) {
        this.json.postJsonPuestoEditar(EditarPuestoEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó el Puesto con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarPuesto: NgForm) {
        if (AgrgarPuesto.valid) {
          this.json.postJsonPuestoAgregar(AgrgarPuesto.value).subscribe((res: any) => {
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

      goToBuscar(BuscarPuesto: NgForm) {
        if (BuscarPuesto.valid) {
          this.json.postJsonPuestoBuscar(BuscarPuesto.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Puestos'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Puesto(object: any): void{
        this.json.postJsonPuestoEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }




    }