
  import { Component } from '@angular/core';
  import {Router} from '@angular/router';
  import { JsonService } from '../../json.service';
  import { NgForm } from '@angular/forms';
  
  
  @Component({
      selector: 'app-gestionarTipoPlanilla',
      templateUrl: './gestionarTipoPlanilla.component.html',
      styleUrls: ['./gestionarTipoPlanilla.component.css']
    })
  
    export class GestionarTipoPlanilla{
      res1: Array<any> = [{"id_TipoPlanilla":"15242","descripcion":"Prubea 1",
                            "pagoMensual":500,"pagoXhora":100,"pagoXclase":20}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      PlanillaEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

      constructor(
          private router: Router, public json: JsonService) {

          /* this.json.getJsonTipoPlanilla().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/

        }
  
        enviarAEditar(editar: any){
          this.PlanillaEditando = [editar];
          this.frameEditarAbrir = true;
        }
    
        editarTipoPlanillaClose(estado : boolean){
          this.frameEditarAbrir = estado;
        }

        goToEditar(EditarTipoPlanillaEditado: NgForm){
          if (EditarTipoPlanillaEditado.valid) {
          this.json.postJsonTipoPlanillaEditar(EditarTipoPlanillaEditado.value).subscribe((resy: any) => {
            console.log(resy);
            this.res5 = resy;
            if(resy.status == "exito"){
              this.frameEditarAbrir = false;
              window.location.reload();
              alert('Se editó Tipo Planilla con éxito');
            }
        });
          }
          else{
            alert('Error en el ingreso de datos');
          }
        }
  
        goTo(AgrgarTipoPlanilla: NgForm) {
          if (AgrgarTipoPlanilla.valid) {
            this.json.postJsonTipoPlanillaAgregar(AgrgarTipoPlanilla.value).subscribe((res: any) => {
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

        goToBuscar(BuscarTipoPlanilla: NgForm) {
          if (BuscarTipoPlanilla.valid) {
            this.json.postJsonTipoPlanillaBuscar(BuscarTipoPlanilla.value).subscribe((res: any) => {
              console.log(res);
              this.res4 = res;
              if (this.res4.length == 0){
                alert('No se encontraron Tipo de Planilla'); }
              }
            );
          }
          else{
            alert('Error en el ingreso de datos');
          }
        }

        Eliminar_TipoPlanilla(object: any): void{
          this.json.postJsonTipoPlanillaEliminar(object).subscribe((resX: any) => {
            console.log(resX);
            this.res2 = resX;
            if(resX.status == "exito"){
              window.location.reload();
            }
        });
        
        }
  

      }
