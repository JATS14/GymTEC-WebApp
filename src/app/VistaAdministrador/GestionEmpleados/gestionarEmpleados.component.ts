import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarEmpleados',
    templateUrl: './gestionarEmpleados.component.html',
    styleUrls: ['./gestionarEmpleados.component.css']
  })

  export class GestionarEmpleados{
    
    res1: Array<any> = [{"nombre":"Nombre1","numeroCedula":305250652,"direccion":"Cartago-Cartago-Guadalupe",
                          "puesto":"puesto1","sucursal":"nombresucursal",
                          "tipoPlanilla":"Planilla1","correo":"akjsdkad@ajdkdajs","contrasena":"pepiro1"}];
      res2: Array<any> = [];
      res3: Array<any> = [];
      res4: Array<any> = [];
      res5: Array<any> = [];
  
      EmpleadoEditando: Array<any> = [];
    
      frameEditarAbrir : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {

        /* this.json.getJsonEmpleado().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });*/
      }

      enviarAEditar(editar: any){
        this.EmpleadoEditando = [editar];
        this.frameEditarAbrir = true;
      }
  
      editarEmpleadoClose(estado : boolean){
        this.frameEditarAbrir = estado;
      }

      goToEditar(EditarEmpleadoEditado: NgForm){
        if (EditarEmpleadoEditado.valid) {
        this.json.postJsonEmpleadoEditar(EditarEmpleadoEditado.value).subscribe((resy: any) => {
          console.log(resy);
          this.res5 = resy;
          if(resy.status == "exito"){
            this.frameEditarAbrir = false;
            window.location.reload();
            alert('Se editó el Empleado con éxito');
          }
      });
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      goTo(AgrgarEmpleado: NgForm) {
        if (AgrgarEmpleado.valid) {
          this.json.postJsonEmpleadoAgregar(AgrgarEmpleado.value).subscribe((res: any) => {
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

      goToBuscar(BuscarEmpleado: NgForm) {
        if (BuscarEmpleado.valid) {
          this.json.postJsonEmpleadoBuscar(BuscarEmpleado.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Empleado'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

      Eliminar_Empleado(object: any): void{
        this.json.postJsonEmpleadoEliminar(object).subscribe((resX: any) => {
          console.log(resX);
          this.res2 = resX;
          if(resX.status == "exito"){
            window.location.reload();
          }
      });
      
      }

    }