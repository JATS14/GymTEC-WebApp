import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarProductos',
    templateUrl: './gestionarProductos.component.html',
    styleUrls: ['./gestionarProductos.component.css']
  })

  export class GestionarProductos{
    
    res1: Array<any> = [{"nombre":"Prodcuto1","codigoBarras":58487855,
                            "descripcion":"Descripcion producto 1","costo":1000}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      ProdcutoEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {

         this.json.getJsonProducto().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }

      enviarAEditar(editar: any){
        this.ProdcutoEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarProductoClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarProdcutoEditado: NgForm){
        if (EditarProdcutoEditado.valid) {
        this.json.postJsonProductoEditar(EditarProdcutoEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó Producto con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarProdcuto: NgForm) {
        if (AgrgarProdcuto.valid) {
          this.json.postJsonProductoAgregar(AgrgarProdcuto.value).subscribe((res: any) => {
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

      goToBuscar(BuscarProducto: NgForm) {
        if (BuscarProducto.valid) {
          this.json.postJsonProductoBuscar(BuscarProducto.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Productos'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Producto(object: any): void{
        this.json.postJsonProductoEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }


    }