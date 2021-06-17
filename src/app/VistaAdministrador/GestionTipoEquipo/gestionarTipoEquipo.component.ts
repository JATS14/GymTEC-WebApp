import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarTipoEquipo',
    templateUrl: './gestionarTipoEquipo.component.html',
    styleUrls: ['./gestionarTipoEquipo.component.css']
  })

  export class GestionarTipoEquipo{
      res1: Array<any> = [{"identificador":"15242","descripcion":"Prubea 1"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      TipoEquipoEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;
    constructor(
        private router: Router, public json: JsonService) {

        /* this.json.getJsonTipoEquipo().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/
      }

      enviarAEditar(editar: any){
        this.TipoEquipoEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarTipoEquipoClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarTipoEquipoEditado: NgForm){
        if (EditarTipoEquipoEditado.valid) {
        this.json.postJsonTipoEquipoEditar(EditarTipoEquipoEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó Tipo Equipo con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarTipoEquipo: NgForm) {
        if (AgrgarTipoEquipo.valid) {
          this.json.postJsonTipoEquipoAgregar(AgrgarTipoEquipo.value).subscribe((res: any) => {
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

      goToBuscar(BuscarTipoEquipo: NgForm) {
        if (BuscarTipoEquipo.valid) {
          this.json.postJsonTipoEquipoBuscar(BuscarTipoEquipo.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Tipo de Equipo'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_TipoEquipo(object: any): void{
        this.json.postJsonTipoEquipoEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }
      


    }