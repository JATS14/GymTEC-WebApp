import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarInventario',
    templateUrl: './gestionarInventario.component.html',
    styleUrls: ['./gestionarInventario.component.css']
  })

  export class GestionarInventario{

    res1: Array<any> = [{"tipoMaquina":"tipoequipo1","marca":"Marca1","numSerie":125545 ,
                          "costo":154520,"sucursal":"Sucursal1"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      InventarioEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
         this.json.getJsonInventario().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }

      enviarAEditar(editar: any){
        this.InventarioEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarInventarioClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarInventarioEditado: NgForm){
        if (EditarInventarioEditado.valid) {
        this.json.postJsonInventarioEditar(EditarInventarioEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó Inventario con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarInventario: NgForm) {
        if (AgrgarInventario.valid) {
          this.json.postJsonInventarioAgregar(AgrgarInventario.value).subscribe((res: any) => {
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

      goToBuscar(BuscarInventario: NgForm) {
        if (BuscarInventario.valid) {
          this.json.postJsonInventarioBuscar(BuscarInventario.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Inventarios'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Inventario(object: any): void{
        this.json.postJsonInventarioEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }



    }